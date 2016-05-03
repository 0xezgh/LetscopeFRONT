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
				'save' :          {method :'POST'},
				'progress':    	  {method: 'GET' ,  params: { operation: 'status', id: 'Progress'}  , isArray:true },
				'finished':    	  {method: 'GET' ,  params: { operation: 'status', id: 'Finished'}  , isArray:true },
				'listByTag':      {method: 'GET' ,  params: { operation: 'posts',  id: '@id'},   isArray:true }
			},
			{
				stripTrailingSlashes: false
			});

<<<<<<< HEAD

=======
		
>>>>>>> d34066b64b6b5d17fb84b3e8455efe2cb647461a
	}
})();