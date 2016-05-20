'use strict';

/* App Module */

// TODO 

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
    }).when('/comics/expanded/:comicId', {
        //alert("hello");
        templateUrl: 'js/PageExpanded/comic-expanded.html',
        controller: 'DetailExpandedCtrl'
    }).when('/comics/:comicName/:comicId', {
        //alert("hello");
        templateUrl: 'partials/comic-detail.html',
        controller: 'ComicDetailCtrl'
    }).when('/demo', {
        // alert("hello");
        templateUrl: 'js/DemoOfPost/DemoOfPost.html',
        controller: 'DemoController'
    }).when('/setup', {
        //alert("hello");
        templateUrl: 'js/SetupDirective/comic-setup.html',
        controller: 'comicSetupCtrl'
    }).otherwise({
        redirectTo: '/comics'
    });
}]);
