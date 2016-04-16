(function(){
    'use strict';

    angular
        .module('letscope')
        .factory('postandtagService',postandtagService);

    postandtagService.$inject = ['postandtagDataService'];

    function postandtagService (postandtagDataService){
        var service = {};

        
		service.GetPostsByTag = GetPostsByTag;
        

        return service;

       


		
		
		
		function GetPostsByTag(title,callback){
            var response;

            postandtagDataService.query({
                title : title 
            },function(posts){
                if(posts.error == null)
                {	
					console.log("getting posts by tag !");
					
                    response = {success : true,
								possts:possts
					};
                }
                else{
                    console.log("!Done");
                    response = {success : false, message: possts.error};
                }
                callback(response);
            });
        }
		

		
		
		

    }

})();