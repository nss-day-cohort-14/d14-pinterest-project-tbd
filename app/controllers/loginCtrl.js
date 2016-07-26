'use strict';

app.controller('loginCtrl', function ($scope, authFactory) {

	$scope.openModal = function () {
    $('#modal1').openModal();
  };
  $scope.openModal();

  $scope.login = function(){

  	console.log("Login initialized");

  	authFactory.authWithProvider(authFactory.googleProvider)
    .then(function(result) {
      var user = result.user.uid;
      console.log("logged in user", user);
    }).catch(function(error) {
      console.log(error);
    });
  }

  $scope.logout = function(){
  	firebase.auth().signOut()
  	.then(function() {
		  // Sign-out successful.
		  authFactory.currentUserID = null;
		  console.log(authFactory.getUser(), "Logged out");
		}, function(error) {
		  // An error happened.
		  console.log(error);
		});
  }
});
