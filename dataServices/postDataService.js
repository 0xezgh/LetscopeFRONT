(function(){
	'use strict';

	angular
			.module('letscope')
			.factory('PostDataService',PostDataService);

	PostDataService.$inject = ['$resource']

	function PostDataService($resource){

		return $resource('http://localhost:3000/post/:operation/:id',{id: '@id'},
			{   'get':            {method: 'GET', params: { id: '@id'}},
				'update':    	  {method: 'PUT' , params: { id: '@id'}},
				'list':    	  	  {method: 'GET' ,  params: { id: '@id'}  , isArray:true },
				'save' :          {method : 'POST'},
				'progress':    	  {method: 'GET' ,  params: { operation: 'status', id: 'Progress'}  , isArray:true },
				'finished':    	  {method: 'GET' ,  params: { operation: 'status', id: 'Finished'}  , isArray:true },
			},
			{
				stripTrailingSlashes: false
			});

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