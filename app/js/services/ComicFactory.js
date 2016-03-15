'use strict';

/* Services */

/* replace the inline function with 'getComics' and then created the function 'getComics' */
comicServices.factory('Comic', ['$resource', getComics]);

function getComics($resource) {
    console.log("in Comic Factory Service");
    var newResource = $resource('comics/:comicId.json', {}, {
        //query: {method: 'GET', params: {comicId: 'comicsTemp'}, isArray: true}
        query: {method: 'GET', params: {comicId: 'comicTest'}, isArray: true}
    });
    return newResource;
};

