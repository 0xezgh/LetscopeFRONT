(function(){
	
    'use strict';

    angular
        .module('letscope')
        .controller('PostController',PostController);

    PostController.$inject = ['PostService','$scope','$location', '$http', '$window'];
	
	function PostController(PostService,$scope,$location, $http, $window) {
		 var id ='56df727ecba219ffec2f2bee';
		$scope.post = {
			
		title : '',	
		shortDesc : '',	
		longDesc : '',	
			
		} 
			$scope.posts = [];
		
		
			 PostService.GetPosts(id,function (response) {
			
			$scope.posts = [];
			
			
				if(response.success){
				   $scope.posts=response.posts;
				}
				else{
					$scope.msg = "No post available";
				}
			});
			
			
		$scope.update = function(post){
            console.log(post);
            UserService.UpdateProfile(id,title,shortDesc,function(response){
                if (response.success)
                {
                    $scope.msg = "Successfully modified !";
                }
                else{
                    $scope.msg = "Changes has not been applied !";
                }
            });
        };
		
		
		
		$scope.addWork = function(){
			
			console.log($scope.post.title);
			PostService.AddWork($scope.post.title,$scope.post.longDesc,$scope.post.shortDesc,'','',function(response){
                if (response.success)
                {
                    $scope.msg = "Successfully added !";
					console.log('yess');
					alert("Work Successfully added !");
					
		window.setTimeout("location=('http://localhost/letscopefront/#/activity');",1000);

					
                }
                else{
                    $scope.msg = "Changes has not been applied !";
                }
			
			});
		}
		
		
			
		
		
	};
	
})();