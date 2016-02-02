'use strict';

/* Services */

var comicServices = angular.module('comicServices', ['ngResource']);

/* replace the inline function with 'getComics' and then created the function 'getComics' */
comicServices.factory('Comic', ['$resource', getComics]);
//comicServices.factory('ListComic',listComicFactory); /* working code */


function getComics($resource) {
    var newResource = $resource('comics/:comicId.json', {}, {
        query: {method: 'GET', params: {comicId: 'comicsTemp'}, isArray: true}
        //query: {method:'GET', params:{comicId:'comicTest'}, isArray:true}
    });
    return newResource;
};

comicServices.provider('ListComic', function ListComicProvider() {
        var imageLocation = "img/comicStrips";
        var newComicId = "BC";
        this.setComicId = function (comicID) {
            newComicId = comicID;
        }

        this.$get = function () {
            var returnValue = [];

            var strtDate = new Date();
            var toDay = strtDate;
            for (var days = 0; days < 14; days++) {
                var strYear = toDay.getFullYear();
                var strMon = ( "0" + (toDay.getMonth() + 1)).slice(-2);
                var strDay = ( "0" + toDay.getDate()).slice(-2);
                //returnValue[days] = ComicKey+strYear+strMon+strDay;
                var imageId = newComicId + strYear + strMon + strDay + ".jpg";
                returnValue[days] = imageLocation + "/" + newComicId + "/" + imageId;

                toDay.setDate(toDay.getDate() - 1);
            }

            return returnValue;
        }
    });

/* following is the same code but with the function in-line */
//comicServices.factory('Comic', ['$resource',
//function($resource){
//    return $resource('comics/:comicId.json', {}, {
//        query: {method:'GET', params:{comicId:'comicsTemp'}, isArray:true}
//        //query: {method:'GET', params:{comicId:'comicTest'}, isArray:true}
//    });
//}]);