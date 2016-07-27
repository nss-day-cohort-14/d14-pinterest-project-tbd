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
		$scope.newPin.boardKey = dataFactory.currentBoard; //add the board key property
		$scope.newPin.tags = cleanTags($scope.newPin.tags); //add the tags as an array
		dataFactory.postData($scope.newPin, board)
		.then ((response) => {
			$location.url(`/boards/${$scope.newPin.boardKey}`); //redirect to the board's pins
		});
	};

	function cleanTags(tagString){
		tagString = tagString.replace(/\s/g, "");
		let tagArray = tagString.split(/,/);
		return tagArray;
	}

});