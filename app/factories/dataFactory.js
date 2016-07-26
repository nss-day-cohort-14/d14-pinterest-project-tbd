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

					data.forEach((value, i) => (
						putDataEdits(value, board)
					));

					// data.forEach( (value, i) => {
					// 		if(value.refKey === null){
					// 			value.refKey = 
					// 			putDataEdits( value ,board)
					// 		}
					// 	}	
					// );
				// console.log("this is my data", data );
				resolve(data);
			})
			.error((error) => {
				reject(error);
			});
		});
	};
	//function for POST to work with Boards and Pins
	const postData = function(newObject, board) {
		console.log("postData Called");
		let queryString = null;
		if(board){ //only the board object has the uid
			queryString = `boards.json`;
		} else {
			queryString = `pins.json`;
		}
		return $q((resolve, reject) => {
			$http.post(
				`${FirebaseURL}/${queryString}`,
				JSON.stringify(newObject)
				)
			.success((objectFromFirebase) => {
				resolve(objectFromFirebase);
			})
			.error((error) => {
				reject(error);
			});
		});
	};
	//function for PUT to work with Boards and Pins
	const putDataEdits = function(objectToEdit, board) {
		let queryString = null;
		if(board){ //only the board object has the uid
			queryString = `boards`;
		} else {
			queryString = `pins`;
		}
		return $q((resolve, reject) => {
			$http.put(`${FirebaseURL}/${queryString}/${objectToEdit.refKey}.json`,
			 objectToEdit
			 )
			.success((data) => {
				// console.log("Data from delete", data );
				resolve(data);
			})
			.error((error) => {
				reject(error);
			});
		});
	};
	//function for DELETE to work with Boards and Pins
	const deleteData = function(objectToDelete, board) {
		let queryString = null;
		if(board){ //only the board object has the uid
			queryString = `boards`;
		} else {
			queryString = `pins`;
		}
		return $q((resolve, reject) => {
			$http.delete(
				`${FirebaseURL}/${queryString}/${objectToDelete.refKey}.json`
			)
			.success((data) => {
				// console.log("Data from delete", data );
				resolve(data);
			})
			.error((error) => {
				reject(error);
			});
		});
	};	

	//key to prop assigning helper function
	function keyAssigner(object, dataArray){
		let dataCollection = object;

		Object.keys(dataCollection).forEach((key) => {
			dataCollection[key].refKey = key;
			dataArray.push(dataCollection[key]);
		});

		return dataArray;
	}

	return {getData, postData, putDataEdits, deleteData}

});
