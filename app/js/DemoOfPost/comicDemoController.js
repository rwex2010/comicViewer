/**
 * Created by wecksr on 5/19/2016.
 */
ComicViewControllers.controller(
    "DemoController",
    function( $scope, $http, transformRequestAsFormPost ) {

        // I hold the data-dump of the FORM scope from the server-side.
        $scope.cfdump = "";

        // By default, the $http service will transform the outgoing request by
        // serializing the data as JSON and then posting it with the content-
        // type, "application/json". When we want to post the value as a FORM
        // post, we need to change the serialization algorithm and post the data
        // with the content-type, "application/x-www-form-urlencoded".
        var request = $http({
            method: "post",
            url: "process.cfm",
            transformRequest: transformRequestAsFormPost,
            data: {
                id: 4,
                name: "Kim",
                status: "Best Friend"
            }
        });

        // Store the data-dump of the FORM scope.
        request.success(
            function( html ) {

                $scope.cfdump = html;

            }
        );

    }
);
