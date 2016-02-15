'use strict';

/* Services */

commicExpandedComicServices.factory('ExpandedComic', ['$resource', getComics]);

function getComics($resource) {
    console.log("in ExpandedComic Factory Service")
    console.log($resource);

    //console.log("comicId: " + comidId);
    var newResource = $resource('comics/:comicId.json', {}, [
        {query: {method: 'GET', params: {comicId: 'comicsTemp'}, isArray: true}},
        {}
    ]);
    return newResource;
};
