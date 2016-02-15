'use strict';

/* App Module */

var comicViewer = angular.module('comicViewer', [
    'ngRoute',
    'ComicViewControllers',
    'comicFilters',
    'comicServices',
    'comicTryItServices',
    'commicExpandedComicServices'
]);

var comicServices = angular.module('comicServices', ['ngResource']);

var comicTryItServices = angular.module('comicTryItServices', ['ngResource']);

var commicExpandedComicServices = angular.module('commicExpandedComicServices', ['ngResource']);

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
    }).when('/comics/expanded/:comicId', {
        //alert("hello");
        templateUrl: 'js/PageExpanded/comic-expanded.html',
        controller: 'DetailExpandedCtrl'
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