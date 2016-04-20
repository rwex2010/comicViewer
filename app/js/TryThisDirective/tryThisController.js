
ComicViewControllers.controller('TryThisCtrl', ['$q', '$scope', '$routeParams', 'tryItService', 'Comic', TryThisCtrl]);
function TryThisCtrl($q, $scope, $routeParams, tryItService, Comic) {
    var vm = this;
    tryItService.getAllComicStrips($routeParams.comicName, Comic)
        .then(getComicSuccess)
        .catch(errorCallBack);

    function getComicSuccess(comics) {
        console.log("getComicSuccess: " + comics.ComicName);
        //vm.comicStrips=comics;
        //vm.mainImageUrlTryThis = comics.images[0];
        $scope.comicStrips = comics;
        $scope.mainImageUrlTryThis = comics.images[0];
        $scope.ComicName = comics.ComicName;
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


