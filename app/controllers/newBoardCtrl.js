'use strict';
app.controller('newBoardCtrl', function ($scope) {
	$scope.newBoard = {
		description: "",
		refKey: "",
		tags: [],
		title: "",
		uid: ""
	};

});
