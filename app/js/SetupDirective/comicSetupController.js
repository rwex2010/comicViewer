'use strict';

// TODO Add Cancel button - which cancels any changes made and moves to the next comic
// TODO Add Save button - which saves any changes made to the the json file being used (comicsNew.json).
// TODO Add second column with data from the json file being used (comicsNew.json)

ComicViewControllers.controller('comicSetupCtrl', ['$q', '$scope', 'readMyJasonService', 'filterFilter', comicSetup]);

function comicSetup($q, $scope, readMyJasonService, filterFilter) {
    // var vm = this;
    var deferred1;
    var deferred2;
    // var comicToUseObj;
    var activeUrl;
    var jsonUrl;
    var aryWhichOne = ["Raw", "Formatted"];
    var rawUrl = 'comics/allComics.json';
    var formattedUrl = 'comics/comicTest.json';
    var aryJsonUrl = [rawUrl, formattedUrl];
    $scope.jsonUrl1 = rawUrl;
    $scope.formattedUrl = formattedUrl;
    var blnCapturedRaw = false;
    var ix = 0;
    // var ix = 1;
    // for (var ix = 0; ix < 2; ix++) {
    //     if (ix == 0) {
            deferred1 = $q.defer();
        // }
        // if (ix == 1) {
        //     deferred2 = $q.defer();
        // }

        activeUrl = aryWhichOne[ix];
        jsonUrl = aryJsonUrl[ix];

        // while (!blnCapturedRaw) {

            readMyJasonService.getMyJason(jsonUrl)
                .then(getJasonSuccess)
                .catch(errorCallBack);
    // }
    function getJasonSuccess(data) {
            deferred1.resolve(data)
            getJsonRaw(data);
        if (!data) {
            console.log("Data is empty");
            return;
        }
            // deferred2 = $q.defer();
        readMyJasonService.getMyJason(aryJsonUrl[1])
            .then(getJasonFormattedResolve)
            .catch(errorCallBack);

        function getJasonFormattedResolve() {
            deferred1.resolve(data)
                    getJsonFormatted(data);
            if (!data) {
                console.log("Data is empty");
                return;
            }

        }

        // if (activeUrl == "Raw") {
        //     getJsonRaw(data);
        // } else if (activeUrl == "Formatted") {
        //     getJsonFormatted(data);
        // }
    }

            // function getJasonSuccess(data) {
            //     if (data.length > 90) {
            //         deferred1.resolve(data)
            //         getJsonRaw(data);
            //     }
            //     if (data.length < 90) {
            //         deferred2.resolve(data)
            //         getJsonFormatted(data);
            //     }
            //     if (!data) {
            //         console.log("Data is empty");
            //         return;
            //     }
            //     // if (activeUrl == "Raw") {
            //     //     getJsonRaw(data);
            //     // } else if (activeUrl == "Formatted") {
            //     //     getJsonFormatted(data);
            //     // }
            // }
        // }

    function getJsonRaw(data) {
        $scope.theseComics = data;
        $scope.selectedComic = $scope.theseComics[0];
        // $scope.ComicImgCode = $scope.selectedComic.ComicCode;
        // $scope.DaysAvailable = $scope.selectedComic.DaysAvailable;
        // $scope.Description = $scope.selectedComic.description;
        // $scope.ImageCode = $scope.selectedComic.imgCode;
        // $scope.Domain = $scope.selectedComic.Domain;
        // $scope.ImageDirectory = $scope.selectedComic.imgDirectoryLocation;
        // if ($scope.selectedComic.OneOfMyComics) {
        //     $scope.OneOfMine = "TRUE";
        // } else {
        //     $scope.OneOfMine = "FALSE";
        // }
        // $scope.Priority = $scope.selectedComic.priority;
        // blnCapturedRaw = true;
    }

    function getJsonFormatted(data) {
        $scope.theseComics2 = data;
        $scope.selectedComic2 = $scope.theseComics2[2];
        // $scope.ComicImgCode2 = $scope.selectedComic2.ComicCode;
        // $scope.DaysAvailable2 = $scope.selectedComic2.DaysAvailable;
        // $scope.Description2 = $scope.selectedComic2.description;
        // $scope.imgCode2 = $scope.selectedComic2.imgCode;
        // $scope.Domain2 = $scope.selectedComic2.Domain;
        // $scope.ImageDirectory2 = $scope.selectedComic2.imgDirectoryLocation;
        // if ($scope.selectedComic2.OneOfMyComics) {
        //     $scope.FormattedOneOfMine = "TRUE";
        // } else {
        //     $scope.FormattedOneOfMine = "FALSE";
        // }
        // $scope.FormattedPriority = $scope.selectedComic2.priority;
    }

    function errorCallBack() {

    }

    // }
}
