(function(){
	'use strict';
	
	angular
		.module('letscope')
		.factory('UserDataService',UserDataService);
	
	UserDataService.$inject = ['$resource']
	
	function UserDataService($resource){
		var service = {};

		service.GetByUsername = GetByUsername;
		
		return service;

		function GetByUsername(){
			return $resource('http://localhost:3000/user/:username');
		}
	}
})();