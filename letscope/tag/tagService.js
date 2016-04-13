(function(){
    'use strict';

    angular
        .module('letscope')
        .factory('tagService',tagService);

    tagService.$inject = ['tagDataService'];

    function tagService (tagDataService){
        var service = {};

        service.GetTags = GetTags;
        

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

    }

})();