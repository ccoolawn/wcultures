wcApp.factory('wcFactory', function($http, $location){
		var obj = {};
	return {
		runApi: function(data, callback){
			    	obj.city = data;
				// console.log(obj.city, "2");
				// console.log("This is obj " , obj);
			$http.post('/users/fetch', obj).success(function(response){
				callback(response);
			})
		},
		getUsers: function(callback){
			console.log("wcFactory getUsers");
			$http.get('/users').success(function(response){
				callback(response);
			})
		},
		add: function(newUser, callback){
			if(newPatient){
				console.log("wcFactory add ", newUser);
				$http.post('/users', newUser).success(function(response){
					callback(response);
				})
			}
		},
		remove: function(user, callback){
			console.log("wcFactory remove ", user);
			$http.delete('/users/'+user._id).success(function(response){
				callback();
			})
		},
		update: function(user){
			console.log("wcFactory remove ", user);
			$http.put('/users/'+user._id, user).success(function(response){
				$location.path('/users');
			})
		},
		setUser: function(user){
			this.user = user;
			$location.path('/users/details');
		},
		getUser: function(){
			if(!this.user)
				$location.path('/users');
			return this.patient;
		}
	}
})