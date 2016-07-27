'use strict';
app.controller('newPinCtrl', function ($scope, $location, dataFactory) {

	var board = false;

	$scope.newPin = {
		boardKey: null,
		comments: "",
		refKey: null,
		tags: [],
		title: "",
		url: ""
	};

	$scope.addData = function() {
		console.log("adding pin" );
		$scope.newPin.boardKey = dataFactory.currentBoard;
		$scope.newPin.tags = cleanTags($scope.newPin.tags);
		dataFactory.postData($scope.newPin, board)
		.then ((response) => {
			console.log("pin board key", response);
			$location.url(`/boards/${$scope.newPin.boardKey}`);
		});
	};

	function cleanTags(tagString){
		tagString = tagString.replace(/\s/g, "");
		let tagArray = tagString.split(/,/);
		return tagArray;
	}

});