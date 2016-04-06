(function(){
    'use strict';

    angular
        .module('letscope')
        .controller('ProfileController',ProfileController);

    ProfileController.$inject = ['UserService','$scope','$location','AuthenticatedUser','$rootScope'];

    function ProfileController(UserService,$scope,$location,AuthenticatedUser,$rootScope){
        var username = 'Bannou'; // var username = AuthenticatedUser.username;
        $scope.profile = {
            image : "",
            fname : "",
            lname : "",
            city : "",
            country : "",
            facebook :"",
            twitter : "",
            google : "",
            pinterest : "",
            instagram : "",
            linkedin : "",
            website : "",
            aboutme :""
        };

        UserService.GetProfile(username, function (response) {
            if(response.success){
                $scope.profile.image = response.image;
                $scope.profile.fname = response.fname;
                $scope.profile.lname = response.lname;
                $scope.profile.city = response.city;
                $scope.profile.country = response.country;
                $scope.profile.aboutme = response.aboutme;
                $scope.profile.myhobbies = response.myhobbies;
                $scope.profile.facebook = response.facebook;
                $scope.profile.twitter = response.twitter;
                $scope.profile.google = response.google;
                $scope.profile.pinterest = response.pinterest;
                $scope.profile.instagram = response.instagram;
                $scope.profile.linkedin = response.linkedin;
                $scope.profile.website = response.website;
            }
            else{
                $scope.profile.fname = 'fuck';
            }
        });

    }

})();