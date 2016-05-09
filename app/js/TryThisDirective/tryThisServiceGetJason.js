/**
 * Created by wecksr on 3/21/2016.
 */
'use strict';

comicTryItServices.factory('readMyJasonService', ['$q', '$http','$routeParams', 'filterFilter', readMyJasonService]);

function readMyJasonService($q, $http, $routeParams, filterFilter) {
    var deferred = $q.defer("defer once");
    var jsonUrl;

    return {
        getMyJason: getMyJason,
        reset: reset
    };

    function getMyJason(jsonUrl) {
        return $http({
            method: 'GET',
            url: jsonUrl
        })
            .then(sendResponseData)
            .catch(sendErrorResponse);
    }
    
    function sendResponseData(response) {
        deferred.resolve(response.data);
        
        return deferred.promise;
    }
    
    function reset() {
        deferred = $q.defer();        
    }
    
    function sendErrorResponse(response) {
        return "Error: " + response.toString();
    }
}

