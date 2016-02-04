'use strict';

/* Controllers */

var ComicViewControllers = angular.module('ComicViewControllers', []);

ComicViewControllers.controller('ComicListCtrl', ['$scope', 'Comic',
    function ($scope, Comic) {
        $scope.comics = Comic.query();
        $scope.orderProp = 'ComicName';
    }]);

ComicViewControllers.controller('ComicDetailCtrl', ['$scope', '$routeParams', 'Comic',
    function ($scope, $routeParams, Comic) {
        $scope.comic = Comic.get({comicId: $routeParams.comicId}, function (comic) {
            $scope.mainImageUrl = comic.images[0];
            $scope.comic.mydate = "01/10/2017";
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };

    }]);

////ComicViewControllers.controller('SomeDetailCtrl', function ($scope, ListComic) {
//comicViewer.controller('SomeDetailCtrl', function ($scope, ListComic) {
//    //var comicId = "Zits";
//    this.comicStrips = ListComic;
//
//    //this.comicStrips = function(comicId) {
//    //    //return ListComic(comicId);
//    //  return  ListComic(comicId);
//    //}
//});

comicViewer.controller('SomeDetailCtrl',['$scope', '$routeParams', 'ListComic',  function ($scope,$routeParams, ListComic) {
    var comicId = $routeParams.comicId;
    return {
        comicStrips: GetImages(comicId)
    };

   function GetImages(comicId) {
        var imageLocation = "img/comicStrips";
        var newComicId = comicId;

        console.log("in the get function: " + newComicId);
        //return function (newComicId) {
        console.log("in the return function: " + newComicId);
        var returnValue = [];

        var strtDate = new Date();
        var toDay = strtDate;
        for (var days = 0; days < 14; days++) {
            var strYear = toDay.getFullYear();
            var strMon = ( "0" + (toDay.getMonth() + 1)).slice(-2);
            var strDay = ( "0" + toDay.getDate()).slice(-2);
            //returnValue[days] = ComicKey+strYear+strMon+strDay;
            var imageId = newComicId + strYear + strMon + strDay + ".jpg";
            returnValue[days] = imageLocation + "/" + newComicId + "/" + imageId;

            toDay.setDate(toDay.getDate() - 1);
        }
        console.log("before the return: " + returnValue.length);

        return returnValue;

        //}
    }

    //this.comicStrips = function(comicId) {
    //    //return ListComic(comicId);
    //  return  ListComic(comicId);
    //}
}]);

