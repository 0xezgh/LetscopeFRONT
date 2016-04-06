(function(){
	'use strict';
	
	angular
		.module('letscope')
		.factory('LoginService',LoginService);
	
	LoginService.$inject = ['AuthDataService'];
	
	function LoginService (authDataService,Session,AUTH_EVENTS){
		var service = {};

		service.Register = Register;
		service.Login = Login;


		return service;

		function Register(fname,lname,username,email,country,birthdate,newsletter,password,callback){
			var response;
			authDataService.RegisterUser().save({
								fname: fname,
								lname: lname,
								username: username,
								email: email,
								country: country,
								birthdate: birthdate,
								newsletter: newsletter,
								password: password
							},function(user){
				if(user.error == null)
				{
					response = {success:true, userId : user.id, userName : user.fName, userLname : user.lName};
				}else
				{
					response = {success:false, message: user.error};
				}
				callback(response);
			});
		}

		function Login(username,password,callback){
			 var response;
			
			authDataService.Login().save({username: username,password: password},function(user){
				 if(user !== null &&  user.password == password)
                 {
						response = {success:true, userId : user.id, userName : user.fName, userLname : user.lName};
                 } else
                 {
				        response = {success:false, message: 'Username or password is incorrect !'};
				 }
				 callback(response);
			});
		}



		/*function GetType(user,typeCallback){
			var pathResponse;
			return authService.GetUserByEmailAndPassword().save({},{id:user},function(type){
				if(type[0] === '1'){
					pathResponse = {path: '/hrDash', role: 'hrEmployee'};
				}else if(type[0] === '2'){
					pathResponse = {path: '/fanDash', role: 'fanEmployee'};
				}else if(type[0] === '3'){
					pathResponse = {path: '/inventDash',role: 'inventEmployee'};
				}else{
					pathResponse = {path: ''};
				}
				typeCallback(pathResponse);
			});
		}*/

	}
	
})();