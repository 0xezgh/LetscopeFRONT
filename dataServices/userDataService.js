(function(){
	'use strict';

	angular
			.module('letscope')
			.factory('UserDataService',UserDataService);

	UserDataService.$inject = ['$resource']

	function UserDataService($resource){
		return $resource('http://localhost:3000/user/:id/:follow',{id: '@id',follow: '@follow'},
				{   'get':            {method: 'GET', params: { id: '@id'}},
					'update':    	  {method: 'PUT'},
					'follow':		  {method: 'PUT', params: { id: '@id', follow: '@follow'}}
				},
				{
					stripTrailingSlashes: false
				});
	}
})();