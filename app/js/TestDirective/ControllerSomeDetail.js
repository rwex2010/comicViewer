'use strict';

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
    var comicName = $routeParams.comicName;
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
            returnValue[days] = imageLocation + "/" + newComicName + "/"  + imageId;

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
