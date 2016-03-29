/**
 * Created by wecksr on 3/21/2016.
 */
'use strict';

// comicTryItServices.factory('readMyJasonService', ['$q', '$http','$routeParams', '$filter', readMyJasonService]);
comicTryItServices.factory('readMyJasonService', ['$q', '$http','$routeParams', 'filterFilter', readMyJasonService]);

// function readMyJasonService($q, $http, $routeParams, $filter) {
function readMyJasonService($q, $http, $routeParams, filterFilter) {
    var deferred = $q.defer();
    var jsonUrl =  'comics/comicTest.json';
    // var jsonUrl;

    return {
        getMyJason: getMyJason
    };

    function getMyJason(jasonUrl) {
        return $http({
            method: 'GET',
            url: jsonUrl
        })
            .then(sendResponseData)
            .catch(sendErrorResponse);
    }
    
    function sendResponseData(response) {
        deferred.resolve(response.data);

        // var ReturnValue = $filter('filter')(deferred.promise,{ComicCode:'Retail'});
        // tryArray = deferred.promise
        // var ReturnValue = filterFilter(tryArray,{ComicCode:'Retail'});
        // return response.data;
        return deferred.promise;
        // return ReturnValue;
    }
    
    function sendErrorResponse(response) {
        return "Error: " + response.toString();
    }
}

