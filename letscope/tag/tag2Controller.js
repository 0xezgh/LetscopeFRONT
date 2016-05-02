(function(){
    'use strict';

    angular
        .module('letscope')
        .controller('tag2Controller',tag2Controller);

    tag2Controller.$inject = ['tagService','PostService','$scope','$location','$rootScope'];

    function tag2Controller(tagService,PostService,$scope,$location,$rootScope){

	var aux = $location.path();
	var idTag = (aux.split('/')[2]);
	$scope.show= true;
	
	

	
	
	PostService.GetPostsByTag(idTag, function (res) {
		
		
		
            if(res.success){
			   console.log(res);
               $scope.posts=res.posts;
			   console.log($scope.posts);
            }
            else{
                $scope.msg = "No tags available";
            }
			
			if ($scope.posts.length==0)
			{$scope.show=false;}
			console.log($scope.show);
    
        });

	




    }

})();


