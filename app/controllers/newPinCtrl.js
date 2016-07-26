'use strict';
app.controller('newPinCtrl', function ($scope) {

	var board = false;

	$scope.newPin = {
		boardKey: null,
		comments: "",
		refKey: null,
		tags: [],
		title: "",
		url: ""
	};

});
