'use strict';

/* Controllers */

var ComicViewControllers = angular.module('ComicViewControllers', []);

ComicViewControllers.controller('ComicListCtrl', ['$scope', 'Comic',
    function ($scope, Comic) {
        console.log("ComicListCtrl");
        console.log($scope);
        $scope.comics = Comic.query();
        $scope.orderProp = 'ComicName';
    }]);

ComicViewControllers.controller('ComicDetailCtrl', ['$scope', '$routeParams', 'Comic',
    function ($scope, $routeParams, Comic) {
        console.log("in ComicDetailCtrl: ");
        console.log($scope);
        console.log($routeParams);
        $scope.comic = Comic.get({comicId: $routeParams.comicId}, function (comic) {
            $scope.mainImageUrl = comic.images[0];
            $scope.comic.mydate = "01/10/2017";
        });

        $scope.setImage = function (imageUrl) {
            console.log("in ComicDetailCtrl set.image: "+ imageUrl);
            console.log($scope);
            $scope.mainImageUrl = imageUrl;
        };

    }]);