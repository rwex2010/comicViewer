'use strict';

// TODO Add Cancel button - which cancels any changes made and moves to the next comic
// TODO Add Save button - which saves any changes made to the the json file being used (comicsNew.json).
// TODO Add second column with data from the json file being used (comicsNew.json)

// ComicViewControllers.controller('comicSetupCtrl', ['$q', '$scope', 'readMyJasonService', 'filterFilter', 'updateMyJason', comicSetup]);
ComicViewControllers.controller('comicSetupCtrl', ['$q', '$scope', 'readMyJasonService', 'filterFilter', comicSetup]);

// function comicSetup($q, $scope, readMyJasonService, filterFilter, updateMyJason) {
function comicSetup($q, $scope, readMyJasonService, filterFilter) {
    var deferred1;
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

    deferred1 = $q.defer();

    activeUrl = aryWhichOne[ix];
    jsonUrl = aryJsonUrl[ix];

    readMyJasonService.getMyJason(jsonUrl)
        .then(getJasonSuccess)
        .catch(errorCallBack);

    function getJasonSuccess(data) {
        deferred1.resolve(data)
        getJsonRaw(data);
        if (!data) {
            console.log("Data is empty");
            return;
        }

        readMyJasonService.reset();
        // deferred1 = $q.defer();
        
        readMyJasonService.getMyJason(aryJsonUrl[1])
            .then(getJasonFormattedResolve)
            .catch(errorCallBack);

        function getJasonFormattedResolve(data1) {
            deferred1.resolve(data1);
            getJsonFormatted(data1);
            if (!data1) {
                console.log("Data is empty");
                return;
            }
        }
    }

    function getJsonRaw(data) {
        $scope.theseComics = data;
        $scope.selectedComic = $scope.theseComics[0];
    }

    function getJsonFormatted(data) {
        $scope.theseComics2 = data;
        $scope.selectedComic2 = $scope.theseComics2[2];
    }

    function errorCallBack() {

    }

    /** click events **/
    $scope.saveCurrentChanges = function (clickEvent) {
        // alert("Save Clicked: " + clickEvent.toString());
        // updateMyJason.putMyJason('comics/Update.txt');
    }
}
