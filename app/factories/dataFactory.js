'use strict';

app.factory('dataFactory', function($q, $http, FirebaseURL) {

  var currentBoard = "";
  var currentPin = "";

  //function for GET to work with Boards and Pins
  const getData = function(board) {
    let data = [];
    let queryString = null;
    if (board) { //only the board object has the uid
      queryString = `boards.json`;
    } else {
      queryString = `pins.json`;
    }
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}/${queryString}`)
        .success((dataObject) => {
          data = keyAssigner(dataObject, data); //this assigns keys locally to the objects
          //the following forEach puts locally assigned keys on firebase
          data.forEach((value, i) => (
            putDataEdits(value, board)
          ));
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
    if (board) { //only the board object has the uid
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
    if (board) { //only the board object has the uid
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
  const deleteData = function(refKey, board) {
    let queryString = null;
    if (board) { //only the board object has the uid
      queryString = `boards`;
    } else {
      queryString = `pins`;
    }
    return $q((resolve, reject) => {
      $http.delete(
        `${FirebaseURL}/${queryString}/${refKey}.json`
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
  function keyAssigner(object, dataArray) {
    let dataCollection = object;

    Object.keys(dataCollection).forEach((key) => {
      dataCollection[key].refKey = key;
      dataArray.push(dataCollection[key]);
    });

    return dataArray;
  }

  return {
    getData, postData, putDataEdits, deleteData
  }

});