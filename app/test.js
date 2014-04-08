/**
 * Created by pvty on 4/4/14.
 */
myapp.config(function($httpProvider) {
    function exampleInterceptor($q,$log) {
        function success(response) {
            $log.info('Successful response: ' + response);
            return response;
        }
        function error(response) {
            var status = response.status;
            $log.error('Response status: ‚' + status +  response);
            return $q.reject(response); //similar to throw response;
        }
        return function(promise) {
            return promise.then(success, error);
        }
    }
});