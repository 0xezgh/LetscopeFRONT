(function(){
	'use strict';

	angular
			.module('letscope')
			.factory('PostDataService',PostDataService);

	PostDataService.$inject = ['$resource']

	function PostDataService($resource){
		return $resource('http://localhost:3000/post/:id',{id: '@id'},
				{   'get':            {method: 'GET', params: { id: '@id'}},
					'update':    	  {method: 'PUT'},
					
					'save' : {method : 'POST'}
				},
				{
					stripTrailingSlashes: false
				});
	}
})();