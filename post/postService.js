(function(){
    'use strict';

    angular
        .module('letscope')
        .factory('PostService',PostService);

    PostService.$inject = ['PostDataService'];

    function PostService (PostDataService){
        var service = {};

        service.AddWork = AddWork;

        return service;

        function AddWork(title,longDesc,shortDesc,txtContent,imgContent,callback){
            var response;
            
			PostDataService.save({
               title:title,
			   longDesc :longDesc ,
			   shortDesc : shortDesc,
			   txtContent :txtContent ,
			   imgContent:imgContent
            },function(post){
                if(post.error == null)
                {
                    console.log(post);
                    response = {
                        success:true
                    };
                }else
                {
                    response = {success:false, message: post.error};
                }
                callback(response);
            });
        }
		
		
        function GetPost(callback){
            var response;
            
            postDataService.query({
                
               
            },function(post){
                if(post.error == null)
                {
                    console.log(post[0]);
					console.log(post[0].name);
					console.log(post[0].description);
                    response = {success : true,
								post : post
					};
                }
                else{
                    console.log("!Done");
                    response = {success : false};
                }
                callback(response);
            });
        }

     /*  function UpdateProfile(id,fname,lname,occupation,website,country,city,aboutme,myhobbies,facebook,twitter,google,pinterest,instagram,linkedin,callback){
            var response;
            console.log('New user = ' + " - " +fname +" - " + lname +" - " + occupation +" - " +website +" - " +country+" - " +city+" - " +aboutme+" - " +myhobbies+" - " +facebook+" - " +twitter+" - " +google+" - " +pinterest+" - " +instagram);
            UserDataService.update({
                id : id,
                fname : fname,
                lname : lname,
                occupation : occupation,
                website : website,
                country : country,
                city : city,
                aboutme : aboutme,
                myhobbies : myhobbies,
                facebook : facebook,
                twitter : twitter,
                google : google,
                pinterest : pinterest,
                instagram : instagram,
                linkedin : linkedin
            },function(profile){
                if(profile.error == null)
                {
                    console.log("Done");
                    response = {success : true};
                }
                else{
                    console.log("!Done");
                    response = {success : true};
                }
                callback(response);
            });
        } */

    }

})();