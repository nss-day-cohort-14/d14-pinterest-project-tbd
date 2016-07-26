'use strict';

app.controller('navCtrl', function ($scope, authFactory) {

	//scoped boolean to see if logged in or logged out and determine which
	////log state button we need to show
	$scope.dummy = function () {
		$scope.user = authFactory.getUser();
		console.log($scope.user, 'data RAWR');
	}

});
