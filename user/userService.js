(function(){
    'use strict';

    angular
        .module('letscope')
        .factory('UserService',UserService);

    UserService.$inject = ['UserDataService'];

    function UserService (userDataService,Session,AUTH_EVENTS){
        var service = {};

        service.GetProfile = GetProfile;

        return service;

        function GetProfile(username,callback){
            var response;
            userDataService.GetByUsername().get({
                username: username
            },function(user){
                if(user.error == null)
                {
                    response = {
                        success:true,
                        username : user.username,
                        fname : user.name.fname,
                        lname : user.name.lname,
                        email : user.email,
                        city : user.city,
                        country : user.country,
                        aboutme: user.about_me,
                        myhobbies: user.my_hobbies,
                        image : user.profile_image_url,
                        facebook : user.fb.url,
                        twitter : user.twitter.url,
                        google : user.google.url,
                        pinterest : user.pinterest.url,
                        instagram : user.instagram.url,
                        linkedin : user.linkedin.url,
                        website : user.website
                    };
                }else
                {
                    response = {success:false, message: user.error};
                }
                callback(response);
            });
        }



    }

})();