(function(){
	'use strict';

	angular
			.module('letscope')
			.factory('postandtagDataService',postandtagDataService);

	postandtagDataService.$inject = ['$resource']

	function postandtagDataService($resource){
		return $resource('http://localhost:3000/post/:title',{title: '@title'},
				{   'get':    {method: 'GET' , params: {title: '@title'} },
					
					'query':  {method:'GET',  params: {title: '@title'} , isArray:true}
				},
				{
					stripTrailingSlashes: false
				});
	}
})();