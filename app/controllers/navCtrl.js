'use strict';

app.controller('navCtrl', function ($scope, authFactory) {

	$scope.dummy = function () {
		$scope.user = authFactory.getUser();
		console.log($scope.user, 'data RAWR');
	}

});
