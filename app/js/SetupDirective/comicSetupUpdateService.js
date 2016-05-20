/**
 * Created by wecksr on 5/19/2016.
 */
'use strict';

comicTryItServices.factory('updateMyJason', ['$q', '$http','$routeParams', 'filterFilter', updateMyJason]);

function updateMyJason($q, $http, $routeParams, filterFilter) {
    return {
        putMyJason: putMyJason,
    };

    function putMyJason(jsonUrl) {
        return $http({
            method: 'POST',
            url: jsonUrl,
            data: 'Hello world'
        })
            .then(sendResponseData)
            .catch(sendErrorResponse);
    }

    function sendResponseData(response) {
        deferred.resolve(response.data);

        return deferred.promise;
    }

    function sendErrorResponse(response) {
        return "Error: " + response.toString();
    }

}
// http://www.bennadel.com/blog/2615-posting-form-data-with-http-in-angularjs.htm
// var request = $http({
//     method: "post",
//     url: "process.cfm",
//     transformRequest: transformRequestAsFormPost,
//     data: {
//         id: 4,
//         name: "Kim",
//         status: "Best Friend"
//     }
