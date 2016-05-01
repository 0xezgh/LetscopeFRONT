(function(){
    'use strict';

    angular
        .module('letscope')
        .controller('tag2Controller',tag2Controller);

    tag2Controller.$inject = ['tagService','PostService','$scope','$location','$rootScope'];

    function tag2Controller(tagService,PostService,$scope,$location,$rootScope){

	var aux = $location.path();
	var idTag = (aux.split('/')[2]);
	
	PostService.GetPostsByTag(idTag, function (response) {
		
		
		
            if(response.success){
			   console.log(response);
               $scope.posts=response.posts;
            }
            else{
                $scope.msg = "No tags available";
            }
        });






    }

})();


