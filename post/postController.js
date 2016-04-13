(function(){
	
    'use strict';

    angular
        .module('letscope')
        .controller('PostController',PostController);

    PostController.$inject = ['PostService','$scope','$location'];
	
	function PostController(PostService,$scope,$location){
		 
		$scope.post = {
			
		title : '',	
			
			
			
		} 
		
		
		
		
		
		$scope.addWork = function(){
			
			console.log($scope.post.title);
			PostService.AddWork($scope.post.title,'','','','',function(response){
                if (response.success)
                {
                    $scope.msg = "Successfully modified !";
                }
                else{
                    $scope.msg = "Changes has not been applied !";
                }
			
		});
	}
	
}
})();