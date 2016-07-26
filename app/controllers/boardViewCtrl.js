'use strict';

app.controller('boardView', function($scope, dataFactory) {

  var board = true; //this tell the getData() that it is looking for boards
  $scope.boardArray = []; //board object array

  //delete board
  $scope.deleteBoard = function() {
    console.log("clicked delete");
  };

  dataFactory.getData(board)
    .then((boardCollection) => {
      console.log("", boardCollection);
      $scope.boardArray = boardCollection;
    });

});
