'use strict';

/* Services */

//var comicServices = angular.module('comicServices', ['ngResource']);

/* replace the inline function with 'getComics' and then created the function 'getComics' */
comicServices.factory('Comic', ['$resource', getComics]);

function getComics($resource) {
    console.log("in Comic Factory Service");
    //console.log("comicId: " + comidId);
    var newResource = $resource('comics/:comicId.json', {}, {
        query: {method: 'GET', params: {comicId: 'comicsTemp'}, isArray: true}
        //query: {method:'GET', params:{comicId:'comicTest'}, isArray:true}
    });
    return newResource;
};


/////* following is the same code but with the function in-line */
//comicServices.factory('Comic', ['$resource',
//function($resource){
//    return $resource('comics/:comicId.json', {}, {
//        query: {method:'GET', params:{comicId:'comicsTemp'}, isArray:true}
//        //query: {method:'GET', params:{comicId:'comicTest'}, isArray:true}
//    });
//}]);