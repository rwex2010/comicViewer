'use strict';

/* App Module */

var comicViewer = angular.module('comicViewer', [
    'ngRoute',
    'ComicViewControllers',
    'comicFilters',
    'comicServices'
]);

var comicServices = angular.module('comicServices', ['ngResource']);

comicViewer.config(['$routeProvider',
function($routeProvider){
    $routeProvider.
        when('/comics', {
        templateUrl: 'partials/comic-list.html',
        controller: 'ComicListCtrl'
    }).when('/comics/:comicId', {
        //alert("hello");
        templateUrl: 'partials/comic-detail.html',
        controller: 'ComicDetailCtrl'
    }).otherwise({
        redirectTo: '/comics'
    });
}]);

//comicViewer.config(function(ListComicProvider) {
//    ListComicProvider.setComicId("dilbert");
//});

//comicViewer.config(function(ComicDetailFactory) {
//    ComicDetailFactory.setComicId("dilbert");
//});