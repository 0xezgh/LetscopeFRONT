(function(){
    'use strict';

    angular
        .module('letscope')
        .controller('tagController',tagController);

    tagController.$inject = ['tagService','$scope','$location','$rootScope'];

    function tagController(tagService,$scope,$location,$rootScope){


        tagService.GetTags(function (response) {
		 $scope.tag = {
            name : "",
            description : ""
        };
		$scope.tags = [];
		
		
            if(response.success){
               $scope.tags=response.tags;
            }
            else{
                $scope.msg = "No tags available";
            }
        });
		
		
		
		tagService.GetTagByName(name, function (response) {
		 $scope.tag = {
            name : "",
            description : ""
        };
		$scope.tags = [];
		
		
            if(response.success){
               $scope.tag=response.tag;
            }
            else{
                $scope.msg = "Tag not found";
            }
        });




    }

})();


