//comicTryItServices.factory('TryIt', ['$resource', getComics]);
//
//function getComics($resource) {
//    //var newResource = $resource('comics/:comicId.json', {}, {
//            return $resource('comics/:comicId.json', {}, {
//        query: {method: 'GET', params: {comicId: 'comicsTemp'}, isArray: true}
//        //query: {method:'GET', params:{comicId:'comicTest'}, isArray:true}
//    });
//    //return newResource;
//};

/* following is the same code but with the function in-line */
comicTryItServices.factory('TryIt', ['$resource',
function($resource){
    console.log("TryIt Service");
    //console.log("comic id: " + newComicId);
    return $resource('comics/:comicId.json', {}, {

        query: {method:'GET', params:{comicId:'comicsTemp'}, isArray:true}
        //query: {method:'GET', params:{comicId:'comicTest'}, isArray:true}
    });
}]);