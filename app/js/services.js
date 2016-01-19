'use strict';

/* Services */

var comicServices = angular.module('comicServices', ['ngResource']);

comicServices.factory('Comic', ['$resource',
function($resource){
    return $resource('comics/:comicId.json', {}, {
        query: {method:'GET', params:{comicId:'comicsTemp'}, isArray:true}
    });
}]);