'use strict';

app.controller('navCtrl', function ($scope, authFactory, $route, $location) {

		//scoped boolean to see if logged in or logged out and determine which
		////log state button we need to show
		$scope.userState = function () {
		 return	authFactory.getUser() ? true : false;
	 };

	 $scope.logout = function(){
		 firebase.auth().signOut()
		 .then(function() {
			 // Sign-out successful.
			 $route.reload();
			//  $location.url("/login");
			 console.log(authFactory.getUser(), "Logged out");
			 authFactory.setUser(null);
		 }, function(error) {
			 // An error happened.
			 console.log(error);
		 });
	 };

	 $scope.login = function () {
		//  $location.url("/login");
	 };

});
