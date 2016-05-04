'use strict';

// TODO Add Cancel button - which cancels any changes made and moves to the next comic
// TODO Add Save button - which saves any changes made to the the json file being used (comicsNew.json).
// TODO Add second column with data from the json file being used (comicsNew.json)

ComicViewControllers.controller('comicSetupCtrl', ['$q', '$scope', 'readMyJasonService', 'filterFilter', comicSetup]);

function comicSetup($q, $scope, readMyJasonService, filterFilter) {
    var vm = this;
    var deferred = $q.defer();
    var comicToUseObj;
    var activeUrl;
    var jsonUrl;
    var aryWhichOne = ["Raw", "Formatted"];
    var rawUrl = 'comics/allComics.json';
    var formattedUrl = 'comics/comicTest.json';
    var aryJsonUrl = [rawUrl, formattedUrl];
    var blnCapturedRaw = false;
    // var jsonUrl =  'comics/comicTest.json';
    // var jsonUrl =  'comics/comicsNew.json';
    // var jsonUrl =  'comics/comics.json';
    // var jsonUrl =  'comics/allComics.json';
    // for (var ix = 0; ix < 1; ix++) {
    var ix = 1;
        activeUrl = aryWhichOne[ix];
        jsonUrl = aryJsonUrl[ix];

        // while (!blnCapturedRaw) {

            // activeUrl = aryWhichOne[0];
            // jsonUrl = aryJsonUrl[0];
            // readMyJasonService.getMyJason($routeParams.comicName)
            readMyJasonService.getMyJason(jsonUrl)
                .then(getJasonSuccess)
                .catch(errorCallBack);

            function getJasonSuccess(data) {
                deferred.resolve(data)
                if (!data) {
                    console.log("Data is empty");
                    return;
                }
                if (activeUrl == "Raw") {
                    getJsonRaw(data);
                } else if (activeUrl == "Formatted") {
                    getJsonFormatted(data);
                }
            }
        // }

    // }

    function getJsonRaw(data) {
        $scope.jsonUrl = jsonUrl;
        $scope.theseComics = data;
        $scope.selectedComic = $scope.theseComics[0];
        $scope.ComicImgCode = $scope.selectedComic.ComicCode;
        $scope.DaysAvailable = $scope.selectedComic.DaysAvailable;
        $scope.Description = $scope.selectedComic.description;
        $scope.ImageCode = $scope.selectedComic.imgCode;
        $scope.Domain = $scope.selectedComic.Domain;
        $scope.ImageDirectory = $scope.selectedComic.imgDirectoryLocation;
        if ($scope.selectedComic.OneOfMyComics) {
            $scope.OneOfMine = "TRUE";
        } else {
            $scope.OneOfMine = "FALSE";
        }
        $scope.Priority = $scope.selectedComic.priority;
        // blnCapturedRaw = true;
    }

    function getJsonFormatted(data) {
        $scope.formattedUrl = jsonUrl;
        $scope.formattedComics = data;
        $scope.selectedFormattedComics = $scope.formattedComics[2];
        $scope.FormattedComicImgCode = $scope.selectedFormattedComics.ComicCode;
        $scope.FormattedDaysAvailable = $scope.selectedFormattedComics.DaysAvailable;
        $scope.FormattedDescription = $scope.selectedFormattedComics.description;
        $scope.FormattedImageCode = $scope.selectedFormattedComics.imgCode;
        $scope.FormattedDomain = $scope.selectedFormattedComics.Domain;
        $scope.FormattedImageDirectory = $scope.selectedFormattedComics.imgDirectoryLocation;
        if ($scope.selectedFormattedComics.OneOfMyComics) {
            $scope.FormattedOneOfMine = "TRUE";
        } else {
            $scope.FormattedOneOfMine = "FALSE";
        }
        $scope.FormattedPriority = $scope.selectedFormattedComics.priority;
    }

    function errorCallBack() {

    }

    // }
}
