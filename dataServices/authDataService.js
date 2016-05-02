(function(){
    'use strict';

    angular
        .module('letscope')
        .factory('AuthDataService',AuthDataService);

    AuthDataService.$inject = ['$resource']

    function AuthDataService($resource){
        return $resource('http://localhost:3000/auth/:operation/:id',{id: '@id'},
            {   'login':          {method: 'POST', params: { operation: 'login'}},
                'logout':         {method: 'POST', params: { operation: 'logout'}},
                'register':    	  {method: 'POST', params: { operation: 'register'}},
                'forget':		  {method: 'POST', params: { operation: 'forget'}},
                'reset':		  {method: 'POST', params: { operation: 'reset'}}
            },
            {
                stripTrailingSlashes: false
            });
    }
})();