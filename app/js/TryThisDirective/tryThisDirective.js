comicViewer.directive('tryThisDirective', function(){
    console.log("in tryThisDirective");
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/TryThisDirective/tryThisDirective.html',
        controller: 'TryThisCtrl'
    }
})
