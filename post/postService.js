(function(){
    'use strict';

    angular
        .module('letscope')
        .factory('PostService',PostService);

    PostService.$inject = ['PostDataService'];

    function PostService (PostDataService){
        var service = {};

        service.AddWork = AddWork;
        service.GetPosts = GetPosts;
        service.UpdatePost = UpdatePost;
		service.GetPostsByTag = GetPostsByTag;
		
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
		
		
        function GetPosts(id,callback){
            var response;
            
            PostDataService.list({
			
                
               
            },function(posts){
                if(posts.error == null)
                {
                    console.log(posts);
                    response = {success : true,
								posts : posts
					};
                }
                else{
                    console.log("!Done");
                    response = {success : false};
                }
                callback(response);
            });
        }
		
		
		function GetPostsByTag(idTag,callback){
            var res;

            PostDataService.listByTag({
                idTag : idTag 
            },function(posts){
                if(posts.error == null)
                {	
					console.log("getting posts by tag !");
					console.log(idTag);
					console.log("number of posts");
                    console.log(posts.length);
					
                    res = {success : true,
								posts:posts
					};
                }
                else{
                    console.log("!Done");
                    response = {success : false, message: posts.error};
                }
                callback(res);
            });
        }	
		
		
	function UpdatePost(id,title,shortDesc,callback){
            var response;
            PostDataService.update({
                id : id,
                title : title,
				shortDesc : shortDesc
            },function(post){
                if(post.error == null)
                {
                    console.log("Done");
                    response = {success : true};
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