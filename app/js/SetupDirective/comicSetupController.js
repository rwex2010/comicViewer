'use strict';

ComicViewControllers.controller('comicSetupCtrl', ['$q', '$scope', 'readMyJasonService','filterFilter', comicSetup]);

    function comicSetup($q, $scope, readMyJasonService, filterFilter) {
        var vm = this;
        var deferred = $q.defer();
        var comicToUseObj;
        var jsonUrl =  'comics/comicTest.json';

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
            // var comicToUse = filterFilter(data, {ComicCode: $routeParams.comicId});
            // comicToUseObj = comicToUse[0];
            // $scope.ComicName = comicToUseObj.ComicName;
            $scope.theseComics = data;
            $scope.selectedComic = $scope.theseComics[0];
            $scope.ComicImgCode = $scope.selectedComic.ComicCode;
            $scope.DaysAvailable= $scope.selectedComic.DaysAvailable;
            $scope.Description= $scope.selectedComic.description;
            $scope.ImageCode= $scope.selectedComic.imgCode;
            $scope.Domain= $scope.selectedComic.Domain;
            $scope.ImageDirectory= $scope.selectedComic.imgDirectoryLocation;
            if ( $scope.selectedComic.OneOfMyComics) {
                $scope.OneOfMine="TRUE";
            } else {
                $scope.OneOfMine="FALSE";
            }
            $scope.Priority= $scope.selectedComic.priority;
        }

        function errorCallBack() {

        }

    }
