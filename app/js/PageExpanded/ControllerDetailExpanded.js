'use strict';

ComicViewControllers.controller('DetailExpandedCtrl', ['$scope', '$routeParams', 'ExpandedComic',
    function ($scope, $routeParams, ExpandedComic) {
        console.log("in DetailExpandedCtrl: ");
        console.log($scope);
        console.log($routeParams);
        $scope.comic = ExpandedComic.get({comicId: $routeParams.comicId}, function (comic) {
            $scope.mainImageUrl = comic.images[0];
            $scope.comic.mydate = "01/10/2017";
        });

        $scope.setImage = function (imageUrl) {
            console.log("in ComicDetailCtrl set.image: "+ imageUrl);
            console.log($scope);
            $scope.mainImageUrl = imageUrl;
        };

    }]);
