(function () {
    comicTryItServices.factory('tryItService', ['$q', '$timeout', '$http', tryItService]);

    function tryItService($q, $timeout, $http) {
        return {
            getAllComicStrips: getAllComicStrips
        };

        function getAllComicStrips(fileName) {

            return $http({
                method: 'GET',
                url: 'img/comicStrips/' + fileName + '/',
            })
                .then(sendResponseData)
                .catch(sendGetBooksError);
        }

        function sendResponseData(response) {
            //console.log("sendResponseDataOne: " + response.data);
            var aTags;
            var returnValue;
            aTags = angular.element(response.data).find('a');
            aTags = aTags.toString();
            ComicName = "Calvin and Hobbes";
            imgCode = "CalvinHobbes";
            imgDirectoryLocation = "img/comicStrips";
            DaysAvailable = 127;
            priority = 1;
            returnValue = parseTheResponse(aTags, ComicName, imgCode, imgDirectoryLocation, DaysAvailable, priority);
            console.log("Transformed: " + returnValue);
            for (ix = 0; ix <= 4; ix++) {
                console.log("ix: " + ix + ") " + returnValue.images[ix]);
            }
            return (returnValue);
        }

        function parseTheResponse(aTags, ComicName, imgCode, imgDirectoryLocation, DaysAvailable, priority) {
            var jsonToReturn = {};
            var myArray = [];
            var jsonArrayToAdd = [];
            myArray = aTags.split(',');

            //for(ix=0; ix < myArray.length ; ix++) {
            for (ix = 0; ix < 10; ix++) {
                newArray = myArray[ix].split('/');
                if (newArray[7] != null) {
                    imgPath = imgDirectoryLocation + "/" + newArray[6] + "/" + newArray[7];
                    var xx = jsonArrayToAdd.push(imgPath);
                }
            }
            jsonToReturn = {
                "ComicName":  ComicName ,
                "imgCode": imgCode ,
                "imgDirectoryLocation": imgDirectoryLocation ,
                "DaysAvailable": DaysAvailable,
                "priority": priority,
                "mainImageUrlTryThis": jsonArrayToAdd[0],
                "images": jsonArrayToAdd };
            console.log("jsonToReturn: " + jsonToReturn.images);
            return jsonToReturn;
        }

        function sendGetBooksError(response) {
            console.log("sendGetBooksError: " + response);
            return $q.reject('Error retrieving book(s). (HTTP status: ' + response.status + ')');
        }
    }
}());
