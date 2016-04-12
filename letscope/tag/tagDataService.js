(function(){
	'use strict';

	angular
			.module('letscope')
			.factory('tagDataService',tagDataService);

	tagDataService.$inject = ['$resource']

	function tagDataService($resource){
		return $resource('http://localhost:3000/tag/:name',{name: '@name'},
				{   'get':            {method: 'GET', params: { name: '@name'}},
					'list':    	  	  {method: 'GET ', isArray:true}
				},
				{
					stripTrailingSlashes: false
				});
	}
})();