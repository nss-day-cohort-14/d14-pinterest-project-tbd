'use strict';

app.controller('loginCtrl', function ($scope, authFactory) {
  
  $scope.login = function(){

  	console.log("Login initialized");

  	authFactory.authWithProvider()
    .then(function(result) {
      var user = result.user.uid;
      console.log("logged in user", user);
    }).catch(function(error) {
      console.log(error);
    });
  }

  $scope.logout = function(){
  	firebase.auth().signOut().then(function() {
		  // Sign-out successful.
		  authFactory.currentUserID = null;
		  console.log(authFactory.getUser(), "Logged out");
		}, function(error) {
		  // An error happened.
		  console.log(error);
		});
  }

  $scope.openModal();
});
