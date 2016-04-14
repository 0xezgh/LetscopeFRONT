(function(){
	'use strict';

	angular
			.module('letscope')
			.factory('tag2DataService',tag2DataService);

	tag2DataService.$inject = ['$resource']

	function tag2DataService($resource){
		return $resource('http://localhost:3000/post/:name',{name: '@name'},
				{   'get':    {method: 'GET' , params: {name: '@name'} ,isArray:true},
					
					'query':  {method:'GET', isArray:true}
				},
				{
					stripTrailingSlashes: false
				});
	}
})();