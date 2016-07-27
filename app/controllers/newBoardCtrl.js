'use strict';
app.controller('newBoardCtrl', function ($scope, $location, dataFactory, authFactory) {

	var board = true;

	$scope.newBoard = {
		description: "",
		refKey: null,
		tags: "",
		title: "",
		uid: null
	};

	$scope.addData = function() {
		$scope.newBoard.uid = authFactory.getUser(); //set uid on boards, but not pins
		$scope.newBoard.tags = cleanTags($scope.newBoard.tags);
		dataFactory.postData($scope.newBoard, board)
		.then ((response) => {
			$location.url("/boards");
		});
	};

	function cleanTags(tagString){
		tagString = tagString.replace(/\s/g, "");
		let tagArray = tagString.split(/,/);
		return tagArray;
	}

	

});
