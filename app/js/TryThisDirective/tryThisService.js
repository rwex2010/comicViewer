(function () {
    comicTryItServices.factory('tryItService', ['$q', '$timeout', '$http','$routeParams', 'readMyJasonService', 'filterFilter', tryItService]);
    // comicTryItServices.factory('tryItService', ['$q', '$timeout', '$http','$routeParams', tryItService]);

    var imgDirectoryLocation = "img/comicStrips";

    function tryItService($q, $timeout, $http, $routeParams, readMyJasonService, filterFilter) {
    // function tryItService($q, $timeout, $http, $routeParams) {
        var deferred = $q.defer();
        return {
            getAllComicStrips: getAllComicStrips
        };

        var fileName;
        function getAllComicStrips(fileName, readMyJasonService) {
        // function getAllComicStrips(fileName) {
            return $http({
                method: 'GET',
                url: imgDirectoryLocation + '/' + fileName + '/',
            })
                .then(sendResponseData)
                .catch(sendGetBooksError);
        }
        // $scope.comic = Comic.get({comicId: $routeParams.comicId}, function (comic) {
        //     $scope.mainImageUrl = comic.images[0];
        //     $scope.comic.mydate = "01/10/2017";
        // });

        function sendResponseData(response) {
            // deferred.resolve(response.data);

            //console.log("sendResponseDataOne: " + response.data);
            var aTags;
            var returnValue;
            var ComicName;
            var comic;
            var imgArray;
            var dataJason;
            var comicToUseObj;

            aTags = angular.element(response.data).find('a');
            aTags = aTags.toString();
            // var promise = readMyJasonService.getMyJason();
            // // comic = readMyJasonService.getMyJason()
            // //     .then(readSuccess(comic))
            // //     .catch(showFailure);
            //   promise.then(function (data) {
            //       deferred.resolve(data);
            //         if (!data) {
            //             console.log("Data is empty");
            //             return;
            //         }
            //         var comicToUse = filterFilter(data,{ComicCode:'Retail'});
            //        comicToUseObj =  comicToUse[0];
            //       dataJason ["ComicName"] = comicToUseObj.ComicName ;
            //       dataJason["imgCode"] = comicToUseObj.imgCode;
            //       dataJason["imgDirectoryLocation"] = comicToUseObj.imgDirectoryLocation;
            //       dataJason["DaysAvailable"] = comicToUseObj.DaysAvailable;
            //       dataJason["priority"] = comicToUseObj.priority;
            //
            //       ComicName = dataJason.ComicName;
            //         // ComicName = comicToUse.ComicName;
            //     }, function() {
            //         console.log("Failed to load comic variable");
            //     });
            console.log("here");
            // imgCode = "CalvinHobbes";
            // imgDirectoryLocation = "img/comicStrips";
            // DaysAvailable = 127;
            // priority = 1;

            // returnValue = parseTheResponse(aTags, ComicName, imgCode, imgDirectoryLocation, DaysAvailable, priority);
            imgArray = buildImgArray(aTags);

            dataJason = {
                "mainImageUrlTryThis": imgArray[0][0],
                "images": imgArray[0] ,
                "imageDates":imgArray[1]};


            console.log("Transformed: " + dataJason);
            // console.log("Comid Name: " + returnValue.ComicName);
            // for (ix = 0; ix <= 4; ix++) {
            //     console.log("ix: " + ix + ") " + returnValue.images[ix]);
            // }
            return (dataJason);
        }

        function readSuccess(response) {
            deferred.resolve(response.data);
            // var thisData = comic;
            // return thisData;
            return deferred.promise;
        }

        function showFailure() {
            console.log("Failed to load comic variable");
        }

        function buildImgArray(aTags) {
            var ReturnValue = [2];
            var myArray = [];
            var jsonImgArrayToAdd = [];
            var jsonImgDateArrayToAdd = [];
            myArray = aTags.split(',');

            for (ix = 0; ix < 20; ix++) {
                newArray = myArray[ix].split('/');
                if ((newArray[7] != null)&& (newArray[7] != "Thumbs.db")) {
                   var imgDate = parseTheDate(newArray[7]);
                    var imgPath = imgDirectoryLocation + "/" + newArray[6] + "/" + newArray[7];
                    var xx = jsonImgArrayToAdd.push(imgPath);
                    var yy = jsonImgDateArrayToAdd.push(imgDate);
                }
            }
            ReturnValue[0] = jsonImgArrayToAdd;
            ReturnValue[1] = jsonImgDateArrayToAdd;

            return ReturnValue;

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
                if ((newArray[7] != null) && (newArray[7] != "thumbs.db")) {
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
            // console.log("sendGetBooksError: " + response.data);
            // return $q.reject('Error retrieving book(s). (HTTP status: ' + response.status + ')');
        }
    }
}());
