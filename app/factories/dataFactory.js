'use strict';

app.factory('dataFactory', function ($q, $http, FirebaseURL) {

	//var for boardsArray
	//var for pinsArray

	//function for GET to work with Boards and Pins
	const getData = function(board) {
		let data = [];
		let queryString = null;
		if(board){ //only the board object has the uid
			queryString = `boards.json`;
		} else {
			queryString = `pins.json`;
		}
		return $q((resolve, reject) => {
			$http.get(`${FirebaseURL}/${queryString}`)
			.success((dataObject) => {
				data = keyAssigner(dataObject, data);
				console.log("this is my data", data );
				resolve(data);
			})
			.error((error) => {
				reject(error);
			});
		});
	};
	//function for POST to work with Boards and Pins
	//function for PUT to work with Boards and Pins
	//function for DELETE to work with Boards and Pins
		////Try to implement an if statement with hadOwnProperty to check for UID since
		////the UID will only be on the Board. So we can see whether we are passing a pin
		////or board that way.

	//key to prop assigning helper function
	function keyAssigner(object, dataArray){
		let dataCollection = object;

		Object.keys(dataCollection).forEach((key) => {
			dataCollection[key].refKey = key;
			dataArray.push(dataCollection[key]);
		});

		return dataArray;
	}
	
	return {getData}

});
