(function(){
	'user strict';
	
	angular
		.module('letscope',['ngRoute','ngResource','ngFileUpload'])
        .value('AuthenticatedUser',{})
		.config(config)
        .run(function($rootScope, $location) {
	    $rootScope.$on("$routeChangeStart", function(event, next, current) {
	    	/*if ($rootScope.AuthenticatedUser== null) {
	    	
	        // no logged user, redirect to /login
	        if ( next.templateUrl === "login/login.html") {
	        }
	        else {
	          $location.path("/");
	        }
	      } */
	    });
	  });
    
	
	config.$inject = ['$routeProvider'];
	
	function config($routeProvider,$rootScope){
		$routeProvider
			.when('/',{
			 	controller:'LoginController',
                templateUrl:'login/login.html'
		})
            .when('/activity',{
				templateUrl:'activity.html'
		})
            .when('/tag',{
				templateUrl:'tags.html'
		})
            .when('/tag/id',{
				templateUrl:'tag.html'
		})
            .when('/user/',{
				templateUrl:'user/profile.html'
		})
				.when('/profile',{
				controller:'ProfileController',
				templateUrl:'user/show-profile.html'
				})

				.when('/profile/edit',{
					controller:'ProfileController',
					templateUrl:'user/edit-profile.html'
				})

				.when('/profile/:id',{
					controller:'ProfileController',
					templateUrl:'user/profile.html'
				})

            .when('/work',{
				templateUrl:'work.html'
		})
            .when('/post/pic',{
				templateUrl:'post-pic.html'
		})
            .when('/post/video',{
				templateUrl:'post-video.html'
		})
            .when('/search',{
				templateUrl:'search.html'
		})
            .when('/people',{
				templateUrl:'people.html'
		})
            .when('/messages',{
				templateUrl:'messages.html'
		})
            .when('/site-map',{
				templateUrl:'site-map.html'
		})
            .when('/contact',{
				templateUrl:'contact-us.html'
		})
	}
})();