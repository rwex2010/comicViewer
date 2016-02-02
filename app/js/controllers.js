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
        $scope.comic=Comic.get({comicId: $routeParams.comicId}, function(comic) {
            $scope.mainImageUrl=comic.images[0];
            $scope.comic.mydate = "01/10/2017";
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }]);

ComicViewControllers.controller('SomeDetailCtrl', function($scope ,ListComic){

    this.comicStrips =  ListComic;

    //this.ListComic = ListComic;
});

//ComicViewControllers.controller('SomeDetailCtrl', ['ListComic', function(ListComic){
//   //var comList = ListComic;
//   // this.comList = ListComic;
//    this.ListComic = ListComic;
//}]);