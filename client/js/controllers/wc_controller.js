	console.log("wcController Loaded");

wcApp.controller('wcController', function($scope, $http, wcFactory){
	var that = this; // this and that  are ==  to BOB to convert back select all thats and replace with $scope

	that.result1 = '';

	that.fetch = function() {
		console.log(that.result1,"1");
		wcFactory.runApi(that.result1, function(res){
			console.log("DATA HERE FROM ROVSHEN U REQUESTED !!!:" + res);
		});

	};

	var getUsers = function(){
		wcFactory.getUsers(function(users){
			that.users = users;
		});
	}
	// getUsers();
	that.add = function(newUser){
			console.log('im here!',newUser);
		wcFactory.add(newUser, function(){
			getUsers();
		})
	}
	that.remove = function(user){
		wcFactory.remove(user, function(){
			getUsers();
		})
	}
	that.show = function(user){
		console.log('0');
		wcFactory.setUser(user);
	}
	that.update = function(user){
		wcFactory.update(user);
	}
	// console.log(that);
})
