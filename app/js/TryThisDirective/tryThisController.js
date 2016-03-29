// ComicViewControllers.controller('TryThisCtrl', ['$q', '$scope', '$routeParams', 'tryItService', 'Comic', TryThisCtrl]);
ComicViewControllers.controller('TryThisCtrl', ['$q', '$scope', '$routeParams', 'tryItService', 'readMyJasonService','filterFilter', TryThisCtrl]);
// function TryThisCtrl($q, $scope, $routeParams, tryItService, Comic) {
function TryThisCtrl($q, $scope, $routeParams, tryItService, readMyJasonService, filterFilter) {
    var vm = this;
    var deferred = $q.defer();
    var comicToUseObj;
    var jsonUrl =  'comics/comicTest.json';
    // tryItService.getAllComicStrips($routeParams.comicName, Comic)
    tryItService.getAllComicStrips($routeParams.comicName)
        .then(getComicSuccess)
        .catch(errorCallBack);

    // readMyJasonService.getMyJason($routeParams.comicName)
    readMyJasonService.getMyJason(jsonUrl)
        .then(getJasonSuccess)
        .catch(errorCallBack);

    function getComicSuccess(comics) {
        // console.log("getComicSuccess: " + comics.ComicName);
        //vm.comicStrips=comics;
        //vm.mainImageUrlTryThis = comics.images[0];
        $scope.comicStrips = comics;
        $scope.mainImageUrlTryThis = comics.images[0];
        // $scope.ComicName = comics.ComicName;
    }

    function getJasonSuccess(data) {
        deferred.resolve(data)
        if (!data) {
            console.log("Data is empty");
            return;
        }
        var comicToUse = filterFilter(data, {ComicCode: $routeParams.comicId});
        comicToUseObj = comicToUse[0];
        $scope.ComicName = comicToUseObj.ComicName;
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

    }

    //vm.setImageTryThis = function (imageUrl) {
    $scope.setImageTryThis = function (imageUrl) {
        console.log("in setImageTryThis(), img = " + imageUrl);
        //vm.mainImageUrlTryThis = imageUrl;
        $scope.mainImageUrlTryThis = imageUrl;
    };

    function errorCallBack(errorMsg) {
        console.log('Error Message in TryThisCtrl: ' + errorMsg);
    }


};


