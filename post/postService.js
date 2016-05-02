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
		service.GetPostsFinished = GetPostsFinished;
        service.UpdatePost = UpdatePost;
        service.GetOnePost = GetOnePost;
		

        return service;

        function AddWork(title,longDesc,shortDesc,work_status,callback){
            var response;
            
			PostDataService.save({
               title:title,
			   longDesc :longDesc ,
			   shortDesc : shortDesc,
			   work_status:work_status,

            },function(post){
                if(post.error == null)
                {
                    console.log(post);
                    response = {
                        success:true,
                        post:post
                    };
                }else
                {
                    response = {success:false, message: post.error};
                }
                callback(response);
            });
        }
		
        function GetOnePost(id,callback){
            var response;
            PostDataService.get({
			id:id
            },function(post){
                if(post.error == null)
                {
                    console.log(post);
                    response = {success : true,
								id : post._id,
								title : post.title,
								longDesc : post.description.longDesc,
								shortDesc : post.description.shortDesc,
								imgContent : post.imgContent

					};
                }
                else{
                    console.log("!Done");
                    response = {success : false};
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
		
        function GetPostsFinished(callback){
            var response;

            PostDataService.finished({},function(posts){
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

        function UpdatePost(id,title,shortDesc,longDesc,work_status,callback){
            var response;
            PostDataService.update({
                id : id,
                title : title,
				shortDesc : shortDesc,
                longDesc : longDesc,
                work_status : work_status
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