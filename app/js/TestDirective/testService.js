(function() {
    angular.module('app')
        .factory('testService', ['$q', '$timeout', '$http', testService]);

    function testService($q, $timeout, $http) {

        return {
            getAllComicStrips: getAllComicStrips,
            getComicStripById: getComicStripById,
        };

        function getAllComicStrips() {

            return $http({
                method: 'GET',
                url: 'img/comicStrips/Luann/',
            })
                .then(sendResponseData)
                .catch(sendGetBooksError);
        }

        function sendResponseData (response) {
            return response.data;
        }

        function sendGetBooksError (response) {
            return $q.reject('Error retrieving book(s). (HTTP status: ' + response.status + ')');
        }

        function getComicStripById(comicStripId) {

            return $http({
                method: 'GET',
                url: 'api/books/' + comicStripId,
            })
                .then(sendResponseData)
                .catch(sendGetBooksError);
        }

    }

    dataService.$inject = ['logger'];
}());