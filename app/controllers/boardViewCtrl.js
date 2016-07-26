'use strict';

app.controller('boardView', function ($scope, dataFactory) {

	var board = true; //this tell the getData() that it is looking for boards
	//board object array
	//delete board

	dataFactory.getData(board)
	.then( (data) => {
		console.log("Then there was me");
	}
	);

});
