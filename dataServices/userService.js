(function(){
	'use strict';
	
	angular
		.module('letscope')
		.factory('UserService',UserService);
	
	UserService.$inject = ['$resource']
	
	function UserService($resource){
		var service = {};
		
		service.GetUserByEmailAndPassword = GetUserByEmailAndPassword;
		service.RegisterUser = RegisterUser;
		
		return service;
		
		function GetUserByEmailAndPassword(){
			return $resource('http://localhost:3000/user/:email/:password');
		}

		function RegisterUser(){
			return $resource('http://localhost:3000/user/');
		}
	}
})();