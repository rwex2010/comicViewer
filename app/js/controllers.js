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

ComicViewControllers.controller('ComicDetailCtrl', ['$scope', '$routeParams',
function($scope, $routeParams) {
    $scope.comicId = $routeParams.comicId;
}]);

