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

//comicViewer.controller('SomeDetailCtrl',['$scope', '$routeParams', 'ListComic',  function ($scope,$routeParams, ListComic) {
comicViewer.controller('SomeDetailCtrl',['$scope', '$routeParams', function ($scope,$routeParams) {
    //$scope.images = {
    //    comicId: $routeParams.comicId,
    //    comicName: $routeParams.comicId,
    //    comicStrips: GetImages($routeParams.comicId),
    //    mainImageUrl: ""
    //};
    console.log("SomeDetailCtrl ....");
    console.log($scope);
    var comicId = $routeParams.comicId;
    var comicName = $routeParams.comicId;;
    var mainImageUrl=""
    return {
        comicStrips: GetImages(comicId, comicName),
        mainImageUrl: mainImageUrl
    };

    //$scope.setMainImage = function(imageClicked) {
    //    mainImageUrl = imageClicked;
    //}

   function GetImages(comicId, comicName) {
        var imageLocation = "img/comicStrips";
        var newComicId = comicId;
       var newComicName = comicName;

        console.log("in the controller GetImages function: " + newComicId + " Name:"+newComicName);
       console.log($scope);
        //return function (newComicId) {
        //console.log("in the return function: " + newComicId);
        var returnValue = [];

        var strtDate = new Date();
        var toDay = strtDate;
        for (var days = 0; days < 14; days++) {
            var strYear = toDay.getFullYear();
            var strMon = ( "0" + (toDay.getMonth() + 1)).slice(-2);
            var strDay = ( "0" + toDay.getDate()).slice(-2);
            //returnValue[days] = ComicKey+strYear+strMon+strDay;
            var imageId = newComicId + strYear + strMon + strDay + ".jpg";
            //returnValue[days] = imageLocation + "/" + newComicId + "/" + imageId;
            returnValue[days] = imageLocation + "/" + newComicName + "/" + imageId;

            toDay.setDate(toDay.getDate() - 1);
        }
        console.log("before the return: " + returnValue.length);

       mainImageUrl=returnValue[2];
        return returnValue;

        //}
    }

    function SetMainImage(dmy) {
        alert("hello");
    }
    //this.comicStrips = function(comicId) {
    //    //return ListComic(comicId);
    //  return  ListComic(comicId);
    //}
}]);

