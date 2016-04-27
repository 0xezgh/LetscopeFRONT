(function(){
	'use strict';
	
	angular
		.module('letscope')
		.factory('LoginService',LoginService);
	
	LoginService.$inject = ['AuthDataService'];
	
	function LoginService (authDataService,Session,AUTH_EVENTS){
		var service = {};

		service.Register = Register;
		service.GetUserStatus = GetUserStatus;
		service.IsLoggedIn = IsLoggedIn;
		service.Login = Login;
		service.Logout = Logout;
		service.ForgetPassword = ForgetPassword;
		service.ResetPassword = ResetPassword;

		return service;

		function Register(fname,lname,username,email,country,birthdate,newsletter,password,callback){
			var response;
			authDataService.register({
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
					response = {success:true, email: user.email, username: user.username};
				}else
				{
					response = {success:false, message: user.error};
				}
				callback(response);
			});
		}

		function GetUserStatus(user){
			return user;
		}

		function IsLoggedIn(user){
			if(user) {
				return true;
			} else {
				return false;
			}
		}

		function Login(username,password,callback){
			 var response;
			
			authDataService.login({username: username,password: password},function(user){
				 if(user.err == null)
                 {
						response = {success:true, message: user.status};
                 } else
                 {
				        response = {success:false, message: user.err};
				 }
				 callback(response);
			});
		}

		function Logout(callback){
			var response;

			authDataService.logout(function(data){
				if(data.status!== null)
				{
					response = {success:true, message: 'Logged out !'};
				} else
				{
					response = {success:false, message: 'Something went wrong !'};
				}
				callback(response);
			});
		}

		function ForgetPassword(email, callback){
			var response;
			authDataService.forget({email: email},function(email){
				if(email.error == null )
				{
					response = {success:true, msg: email.info};
				} else
				{
					response = {success:false, msg: email.error};
				}
				callback(response);
			});

		}

		function ResetPassword(token, password, callback){
			var response;

			authDataService.reset({id: token ,password: password},function(user){
				if(user.info != null)
				{
					response = {success:true, msg: user.info};
				} else
				{
					response = {success:false, msg: user.error};
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