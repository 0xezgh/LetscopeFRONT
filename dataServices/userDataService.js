(function(){
	'use strict';

	angular
			.module('letscope')
			.factory('UserDataService',UserDataService);

	UserDataService.$inject = ['$resource']

	function UserDataService($resource){
		return $resource('http://localhost:3000/user/:id',{id: '@id'},
				{   'get':            {method: 'GET', params: { id: '@id'}},
					'update':    	  {method: 'PUT'}
				},
				{
					stripTrailingSlashes: false
				});
	}
})();