(function(){
    'use strict';

    angular
        .module('letscope')
        .controller('postandtagController',postandtagController);

    postandtagController.$inject = ['postandtagService','$scope','$location','$rootScope'];

    function postandtagController(postandtagService,$scope,$location,$rootScope){

	var aux = $location.path();
	var title = (aux.split('/')[2]);
	    postandtagService.GetPostsByTag(title, function (response) {
		
		
            if(response.success){
               $scope.possts=response.possts;
            }
            else{
                $scope.msg = "No tags available";
            }
        });

		

		




    }

})();


