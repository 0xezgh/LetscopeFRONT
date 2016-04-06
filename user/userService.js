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
                        image : user.profile_image_url,
                        fname : user.name.fname,
                        lname : user.name.lname,
                        city : user.city,
                        country : user.country,
                        facebook : user.fb.url,
                      /* twitter : user.twitter.url,
                        google : user.google.url,
                        pinterest : user.pinterest.url,
                        instagram : user.instagram.url,
                        linkedin : user.linkedin.url,*/
                        website : user.website,
                        aboutme: user.about_me
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