(function () {
    comicTryItServices.factory('tryItService', ['$q', '$timeout', '$http','$routeParams', 'readMyJasonService', 'filterFilter', tryItService]);
    // comicTryItServices.factory('tryItService', ['$q', '$timeout', '$http','$routeParams', tryItService]);

    function tryItService($q, $timeout, $http, $routeParams, readMyJasonService, filterFilter) {
    // function tryItService($q, $timeout, $http, $routeParams) {
        return {
            getAllComicStrips: getAllComicStrips
        };

        var fileName;
        function getAllComicStrips(fileName, readMyJasonService) {
        // function getAllComicStrips(fileName) {
            return $http({
                method: 'GET',
                url: 'img/comicStrips/' + fileName + '/',
            })
                .then(sendResponseData)
                .catch(sendGetBooksError);
        }
        // $scope.comic = Comic.get({comicId: $routeParams.comicId}, function (comic) {
        //     $scope.mainImageUrl = comic.images[0];
        //     $scope.comic.mydate = "01/10/2017";
        // });

        function sendResponseData(response) {
            //console.log("sendResponseDataOne: " + response.data);
            var aTags;
            var returnValue;
            var ComicName;
            var comic;
            aTags = angular.element(response.data).find('a');
            aTags = aTags.toString();
            comic = readMyJasonService.getMyJason()
                // .then(readSuccess(comic))
                // .catch(showFailure);
                .then(function (data) {
                    if (!data) {
                        console.log("Data is empty");
                        return;
                    }
                    var comicToUse = filterFilter(data,{ComicCode:'Retail'});
                   var comicToUseObj =  comicToUse[0];
            
                    ComicName = comicToUseObj.ComicName;
                    // ComicName = comicToUse.ComicName;
                }, function() {
                    console.log("Failed to load comic variable");
                });
            console.log("here");
            // comic = Comic.get({comicId: $routeParams.comicId}, function (comic) {
            //    ComicName = comic.name;
            //     // angular.forEach(comic,function(value, key){
            //     //     console.log("in ForEach: key: "+ key + "  value: " + value);
            //     // })
            //     console.log("Comic in get: "+comic.name);
            // });
            // console.log("Comic: "+ComicName);
            // console.log("$q xx: "+$q.comic);
            //ComicName = "Calvin and Hobbes";
            imgCode = "CalvinHobbes";
            imgDirectoryLocation = "img/comicStrips";
            DaysAvailable = 127;
            priority = 1;
            returnValue = parseTheResponse(aTags, ComicName, imgCode, imgDirectoryLocation, DaysAvailable, priority);
            console.log("Transformed: " + returnValue);
            console.log("Comid Name: " + returnValue.ComicName);
            for (ix = 0; ix <= 4; ix++) {
                console.log("ix: " + ix + ") " + returnValue.images[ix]);
            }
            return (returnValue);
        }

        function readSuccess(comic) {
            var thisData = comic;
            return thisData;
        }

        function showFailure() {
            console.log("Failed to load comic variable");
        }

        function parseTheResponse(aTags, ComicName, imgCode, imgDirectoryLocation, DaysAvailable, priority) {
            var jsonToReturn = {};
            var myArray = [];
            var jsonImgArrayToAdd = [];
            var jsonImgDateArrayToAdd = [];
            myArray = aTags.split(',');

            //for(ix=0; ix < myArray.length ; ix++) {
            for (ix = 0; ix < 10; ix++) {
                newArray = myArray[ix].split('/');
                if (newArray[7] != null) {
                    imgDate = parseTheDate(newArray[7]);
                    imgPath = imgDirectoryLocation + "/" + newArray[6] + "/" + newArray[7];
                    var xx = jsonImgArrayToAdd.push(imgPath);
                    var yy = jsonImgDateArrayToAdd.push(imgDate);
                }
            }
            jsonToReturn = {
                "ComicName":  ComicName ,
                "imgCode": imgCode ,
                "imgDirectoryLocation": imgDirectoryLocation ,
                "DaysAvailable": DaysAvailable,
                "priority": priority,
                "mainImageUrlTryThis": jsonImgArrayToAdd[0],
                "images": jsonImgArrayToAdd ,
                "imageDates":jsonImgDateArrayToAdd};
            console.log("jsonToReturn: " + jsonToReturn.ComicName);
            return jsonToReturn;
        }

        function parseTheDate(imgId) {
            var returnValue;
            var intLengthOfImageId = imgId.length;
            var intYear = imgId.slice((intLengthOfImageId - 12),(intLengthOfImageId - 8));
            var intMonth = imgId.slice((intLengthOfImageId - 8),(intLengthOfImageId - 6)) - 1;
            var intDay = imgId.slice((intLengthOfImageId - 6),(intLengthOfImageId - 4));
            returnValue = new Date(intYear, intMonth, intDay);
            console.log("string passed in: " + imgId);
            console.log("date: " + returnValue.toDateString());
            return returnValue.toDateString();
        }

        function sendGetBooksError(response) {
            console.log("sendGetBooksError: " + response);
            return $q.reject('Error retrieving book(s). (HTTP status: ' + response.status + ')');
        }
    }
}());
