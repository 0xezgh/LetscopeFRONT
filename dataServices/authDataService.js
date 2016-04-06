(function(){
    'use strict';

    angular
        .module('letscope')
        .factory('AuthDataService',AuthDataService);

    AuthDataService.$inject = ['$resource']

    function AuthDataService($resource){
        var service = {};

        service.Login = Login;
        service.RegisterUser = RegisterUser;

        return service;

        function Login(){
            return $resource('http://localhost:3000/auth/login');
        }

        function RegisterUser(){
            return $resource('http://localhost:3000/auth/register');
        }
    }
})();