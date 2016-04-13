(function(){
    'use strict';

    angular
        .module('letscope')
        .factory('tagService',tagService);

    tagService.$inject = ['tagDataService'];

    function tagService (tagDataService){
        var service = {};

        service.GetTags = GetTags;
		service.GetTagByName = GetTagByName;
        

        return service;

       

        function GetTags(callback){
            var response;
            
            tagDataService.query({
                
               
            },function(tags){
                if(tags.error == null)
                {
                    console.log(tags[0]);
					console.log(tags[0].name);
					console.log(tags[0].description);
                    response = {success : true,
								tags : tags
					};
                }
                else{
                    console.log("!Done");
                    response = {success : false};
                }
                callback(response);
            });
        }
		
		
		
		function GetTagByName(callback){
            var response;
            
            tagDataService.query({
                
               
            },function(tag){
                if(tag.error == null)
                {
                    console.log(tags);
					console.log(tags.name);
					console.log(tags.description);
                    response = {success : true,
								tag : tag
					};
                }
                else{
                    console.log("!Done");
                    response = {success : false};
                }
                callback(response);
            });
        }
		

    }

})();