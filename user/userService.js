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
                        myhobbies: user.myhobbies,
                        image : user.profileimageurl,
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

        function UpdateProfile(id,fname,lname,occupation,website,country,city,aboutme,myhobbies,facebook,twitter,google,pinterest,instagram,linkedin,callback){
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
        }

    }

})();