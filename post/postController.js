(function(){
	
    'use strict';

    angular
        .module('letscope')
        .controller('PostController',PostController);

    PostController.$inject = ['PostService','$scope','$location', '$http', '$window','Upload'];
	
	function PostController(PostService,$scope,$location, $http, $window, Upload) {
		var id;
		if($location.path()=='/work/')
		{
			//id = $rootScope.AuthenticatedUser.id;
		}else
		{
			id = $location.path().split('/')[2];
		}

		var aux = $location.path();
		var idP = (aux.split('/')[3]);
		 
		$scope.post = {
			title : '',
			shortDesc : '',
			longDesc : '',
			work_status :'',
			imgContent:''
		}

		$scope.posts = [];
		
		
			/*PostService.GetPosts(idP,function (response) {
				
				$scope.posts = [];
				
				
					if(response.success){
					   $scope.posts=response.posts;
					}
					else{
						$scope.msg = "No post available";
					}
				})
				*/

				
			
				
				
			
		PostService.GetOnePost(id,function (response) {
			if(response.success){
						$scope.post.id = response.id;
						$scope.post.title = response.title;
						$scope.post.longDesc = response.longDesc;
						$scope.post.shortDesc = response.shortDesc;
						$scope.post.imgContent = response.imgContent;
						$scope.post.work_status = response.work_status;
					}
					else{
						$scope.msg = "No post available";
					}
				});

		$scope.update = function(post){
			PostService.UpdatePost(post.id,post.title,post.shortDesc,post.longDesc,post.work_status,function(response){
					if (response.success)
					{
						$scope.msg = "Successfully modified !";
					}
					else{
						$scope.msg = "Changes has not been applied !";
					}
				});
		};

		$scope.addWork = function(post){

				console.log(post);
				PostService.AddWork(post.title,post.longDesc,post.shortDesc,post.work_status,function(response){
                if (response.success)
                {
                    $scope.msg = "Successfully added !";
					$location.path('/work/'+response.post._id);
                }
                else{
                    $scope.msg = "Changes has not been applied !";
                }
			
			});
		}


		$scope.uploadFile = function(file){
			Upload.upload({
				url: 'http://localhost:3000/post/upload/'+id, //webAPI exposed to upload the file
				data:{file:file} //pass file as data, should be user ng-model
			}).then(function (resp) { //upload function returns a promise
				if(resp.data.info){ //validate success
					console.log(resp.data.info);
				} else {
					console.log(resp.data.error);
				}
			}, function (resp) { //catch error
				console.log('Error status: ' + resp.err);
			}, function (evt) {
				console.log(evt);
				var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
				console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
				//$scope.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
			}).finally(function(){
				$location.path('/post/pic/'+id);
			});
		};
		
	};
	
})();