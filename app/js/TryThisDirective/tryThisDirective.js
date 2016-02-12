comicViewer.directive('tryThisDirective', function(){
    console.log("in tryThisDirective");
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/TryThisDirective/tryThisDirective.html',
        controller: function($scope) {
            console.log("tryThisDirective controller")
            console.log($scope)
            $scope.setMainImage = function(img) {
                $scope.mainImageUrl = img;
            }
        }
    }
})
