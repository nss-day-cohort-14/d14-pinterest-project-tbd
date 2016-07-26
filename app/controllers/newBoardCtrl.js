'use strict';
app.controller('newBoardCtrl', function ($scope, $location, dataFactory, authFactory) {

	var board = true;

	$scope.newBoard = {
		description: "",
		refKey: "",
		tags: "",
		title: "",
		uid: ""
	};

	$scope.addData = function() {
		$scope.newBoard.uid = authFactory.getUser();
		$scope.newBoard.tags = cleanTags($scope.newBoard.tags);
		dataFactory.postData($scope.newBoard)
		.then ((response) => {
			$location.url("/boards");
		});
	};

	function cleanTags(tagString){
		tagString = tagString.replace(/ /, "");
		let tagArray = tagString.split(/,/);
		return tagArray;
	}

});
