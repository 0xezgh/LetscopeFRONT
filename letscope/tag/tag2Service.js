(function(){
    'use strict';

    angular
        .module('letscope')
        .factory('tag2Service',tag2Service);

    tag2Service.$inject = ['tag2DataService'];

    function tag2Service (tag2DataService){
        var service = {};

        service.GetTags = GetTags;
		service.GetTagByName = GetTagByName;
        

        return service;

       


		
		
		
		function GetPostByName(name,callback){
            var response;

            tag2DataService.query({
                name : name 
            },function(posts){
                if(posts.error == null)
                {	
					console.log("getting a specific tag !");
					console.log(name);
                    console.log(tag);
					console.log(tag.name);
					console.log(tag.description);
                    response = {success : true,
								posts:posts
					};
                }
                else{
                    console.log("!Done");
                    response = {success : false, message: tag.error};
                }
                callback(response);
            });
        }
		

		
		
		
		
		    function GetTags(callback){
            var response;
            
            tagDataService.query({
                
               
            },function(tags){
                if(tags.error == null)
                {
                    console.log("tags loaded");
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

    }

})();