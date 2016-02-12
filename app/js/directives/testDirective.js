comicViewer.directive('testDirective', function(){
    console.log("in testDirective");
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'partials/testDirective.html',
        controller: function($scope) {
            console.log("testDirective")
            console.log($scope)
            $scope.setMainImage = function(img) {
               $scope.mainImageUrl = img;
            }
        }
    }
})
