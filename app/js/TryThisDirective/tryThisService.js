comicServices.factory('TryIt', ['$resource', getComics]);

function getComics($resource) {
    var newResource = $resource('comics/:comicId.json', {}, {
        query: {method: 'GET', params: {comicId: 'comicsTemp'}, isArray: true}
        //query: {method:'GET', params:{comicId:'comicTest'}, isArray:true}
    });
    return newResource;
};
