'use strict';

/* Controllers */

var ComicViewControllers = angular.module('ComicViewControllers', []);

ComicViewControllers.controller('ComicListCtrl', ['$scope', '$http',
function($scope, $http) {
    $http.get('comics/comicsTemp.json').success(function(data){
        $scope.comics=data;
    });

    $scope.orderProp = 'ComicName';
}]);

ComicViewControllers.controller('ComicDetailCtrl', ['$scope', '$routeParams', '$http',
function($scope, $routeParams, $http) {
    $http.get('comics/' + $routeParams.comicId + '.json').success(function(data) {
        //alert("paarams: " + $routeParams.comicId);
        $scope.comic = data;
        $scope.comic.mydate = "01/10/2017";
    });
    //$scope.comicId = $routeParams.comicId;
}]);

