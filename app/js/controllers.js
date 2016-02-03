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
        comicViewer.config(function(ListComicProvider) {
            console.log("in the config function in controller");
            ListComicProvider.setComicId("Zits");
        });

    }]);

//ComicViewControllers.controller('SomeDetailCtrl', function ($scope, ListComic) {
comicViewer.controller('SomeDetailCtrl', function ($scope, ListComic) {
    //var comicId = "Zits";
    this.comicStrips = ListComic;
    //this.comicStrips = function(comicId) {
    //    //return ListComic(comicId);
    //  return  ListComic(comicId);
    //}
});

