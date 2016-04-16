(function(){
    'use strict';

    angular
        .module('letscope')
        .controller('tag2Controller',tag2Controller);

    tag2Controller.$inject = ['tagService','$scope','$location','$rootScope'];

    function tag2Controller(tagService,$scope,$location,$rootScope){

	var aux = $location.path();
	var name = (aux.split('/')[2]);
	    tagService.GetTagByName(name, function (response) {
		
		
            if(response.success){
               $scope.tag=response.tag;
            }
            else{
                $scope.msg = "No tags available";
            }
        });

		

		




    }

})();


