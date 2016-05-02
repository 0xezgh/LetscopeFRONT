(function(){
    'use strict';

    angular
        .module('letscope')
        .factory('UserService',UserService);

    UserService.$inject = ['UserDataService'];

    function UserService (UserDataService,Session,AUTH_EVENTS){
        var service = {};

        service.GetProfile = GetProfile;
        service.UpdateProfile = UpdateProfile;
        service.UpdateImage = UpdateImage;
        service.FollowUser = FollowUser;

        return service;

        function GetProfile(id,callback){
            var response;
            UserDataService.get({
                id: id
            },function(user){
                if(user.error == null)
                {
                    console.log(user);
                    response = {
                        success:true,
                        username : user.username,
                        fname : user.name.fname,
                        lname : user.name.lname,
                        occupation : user.occupation,
                        email : user.email,
                        city : user.city,
                        country : user.country,
                        aboutme: user.aboutme,
                        myskills: user.myskills,
                        image : user.profileimageurl,
                        facebook : user.fb.url,
                        twitter : user.twitter.url,
                        google : user.google.url,
                        pinterest : user.pinterest.url,
                        instagram : user.instagram.url,
                        linkedin : user.linkedin.url,
                        website : user.website,
                        following : user.followingusers.length
                    };
                }else
                {
                    response = {success:false, message: user.error};
                }
                callback(response);
            });
        }

        function UpdateProfile(id,fname,lname,birthdate,occupation,website,country,city,aboutme,myskills,facebook,twitter,google,pinterest,instagram,linkedin,callback){
            var response;
            UserDataService.update({
                id : id,
                fname : fname,
                lname : lname,
                birthdate : birthdate,
                occupation : occupation,
                website : website,
                country : country,
                city : city,
                aboutme : aboutme,
                myskills : myskills,
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
                    response = {success : false};
                }
                callback(response);
            });
        }

        function UpdateImage(image,callback){
            var response;
            UserDataService.update({
                id : id,
                profileimageurl : image
            },function(profile){
                if(profile.error == null)
                {
                    response = {success : true};
                }
                else{
                    response = {success : false};
                }
                callback(response);
                });
        }

        function FollowUser(id,follow,callback){
            var response;
            UserDataService.follow({
                    id : id,
                    follow : follow
            },function(user) {
                if (user.error == null) {
                    response = {success: true};
                }
                else {
                    response = {success: false};
                }
                callback(response);
            });
        }
    }

})();