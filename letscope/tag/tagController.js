(function(){
    'use strict';

    angular
        .module('letscope')
        .controller('tagController',tagController);

    tagController.$inject = ['tagService','$scope','$location','$rootScope'];

    $scope.modernBrowsers = [
        { icon: "<img src=[..]/opera.png.. />",               name: "Opera",              maker: "(Opera Software)",        ticked: true  },
        { icon: "<img src=[..]/internet_explorer.png.. />",   name: "Internet Explorer",  maker: "(Microsoft)",             ticked: false },
        { icon: "<img src=[..]/firefox-icon.png.. />",        name: "Firefox",            maker: "(Mozilla Foundation)",    ticked: true  },
        { icon: "<img src=[..]/safari_browser.png.. />",      name: "Safari",             maker: "(Apple)",                 ticked: false },
        { icon: "<img src=[..]/chrome.png.. />",              name: "Chrome",             maker: "(Google)",                ticked: true  }
    ];


    function tagController(tagService,$scope,$location,$rootScope){


        tagService.GetTags(function (response) {

		$scope.tags = [];
		
		
            if(response.success){
               $scope.tags=response.tags;
            }
            else{
                $scope.msg = "No tags available";
            }
        });
		
		
		/*$scope.GetTagByName=function(name){
		console.log("name");
		
		
		tagService.GetTagByName(name, function (response) {
		 $scope.tag = {
            name : "",
            description : ""
        };
            if(response.success){
				console.log(response.name);
				$scope.tag.name=response.name;
				$scope.tag.description=response.description;
				
               console.log(response);
            }
            else{
                $scope.msg = "Tag not found";
            }
        });
}*/
		
		




    }

})();


