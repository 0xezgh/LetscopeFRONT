(function(){
	'use strict';

	angular
			.module('letscope')
			.factory('PostDataService',PostDataService);

	PostDataService.$inject = ['$resource']

	function PostDataService($resource){
		return $resource('http://localhost:3000/post/:id/:idTag',{id: '@id',idTag: '@idTag'},
				{   'get':          {method: 'GET', params: { id: '@id'}},
					'update':    	{method: 'PUT' , params: { id: '@id'}},
					'list':    	  	{method: 'GET' , isArray:true },
					'listByTag':    {method: 'GET' , params: {id: 'posts',idTag: '@idTag'}, isArray:true },
					'save': 		{method: 'POST'}
				},
				{
					stripTrailingSlashes: false
				});
	}
})();