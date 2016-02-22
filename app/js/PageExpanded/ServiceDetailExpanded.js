'use strict';

/* Services */

commicExpandedComicServices.factory('ExpandedComic', ['$resource', getComics]);

function getComics($resource) {
    console.log("in ExpandedComic Factory Service")
    console.log($resource);

    //console.log("comicId: " + comidId);
    var newResource = $resource('comics/:comicId.json', {}, [
        {query: {method: 'GET', params: {comicId: 'comicsTemp'}, isArray: true}},
        {theseComics: {method: 'GET', params: {}, isArray: true}}
    ]);
    return newResource;

    function TryThis() {
        aryReturnValue = ["first", "second"];
        return aryReturnValue;
    }
};
/*
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

 */