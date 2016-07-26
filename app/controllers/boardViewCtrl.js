'use strict';

app.controller('boardView', function ($scope, dataFactory) {

	var board = true;
	//board object array
	//delete board

	dataFactory.getData(board)
	.then( (data) => {
		console.log("Then there was me");
	}
	);

});
