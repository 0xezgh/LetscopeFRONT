(function(){
	'user strict';
	
	angular
		.module('letscope',['ngRoute','ngResource','ngFileUpload','file-uploader'])
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
                templateUrl:'letscope/login/login.html'
		})
				.when('/forget',{
					controller:'LoginController',
					templateUrl:'letscope/login/forget.html'
				})
            .when('/activity',{
				controller:'PostController',
				templateUrl:'post/activity.html'
		})
            .when('/tag',{
				controller:'tagController',
				templateUrl:'tags.html'
		})
            .when('/tag/:name',{
				controller:'tag2Controller',
				templateUrl:'tag.html'
		})
		    .when('/tag2/:name',{
				controller:'postandtagController',
				templateUrl:'tag.html'
		})
				.when('/profile',{
				controller:'ProfileController',
				templateUrl:'letscope/user/show-profile.html'
				})

				.when('/profile/edit',{
					controller:'ProfileController',
					templateUrl:'letscope/user/edit-profile.html'
				})

			.when('/profile/:id',{
				controller:'ProfileController',
				templateUrl:'letscope/user/profile.html'
			})
            .when('/work/',{
				controller:'PostController',
                templateUrl:'post/work.html'
		})
		
		
		.when('/work/:id',{
				controller:'PostController',
                templateUrl:'post/workEdit.html'
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