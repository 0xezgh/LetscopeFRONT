(function(){
	
    'use strict';

    angular
        .module('letscope')
        .controller('PostController',PostController);

    PostController.$inject = ['PostService','$scope','$location', '$http'];
	
	function PostController(PostService,$scope,$location, $http){
		 
		$scope.post = {
			
		title : '',	
		shortDesc : '',	
		longDesc : '',	
			
		} 
		
		
		
		
		
		$scope.addWork = function(){
			
			console.log($scope.post.title);
			PostService.AddWork($scope.post.title,$scope.post.longDesc,$scope.post.shortDesc,'','',function(response){
                if (response.success)
                {
                    $scope.msg = "Successfully modified !";
                }
                else{
                    $scope.msg = "Changes has not been applied !";
                }
			
			});
		}
		
		
			 PostService.GetPost(function (response) {
			 $scope.post = {
				title : "",
				shortDesc : ""
			};
			$scope.post = [];
			
			
				if(response.success){
				   $scope.post=response.post;
				}
				else{
					$scope.msg = "No post available";
				}
			});
			
		
		
	};
	
})();