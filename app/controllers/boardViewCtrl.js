'use strict';

app.controller('boardView', function($scope, dataFactory, $route) {

  var board = true; //this tell the getData() that it is looking for boards
  $scope.boardArray = []; //board object array

  //delete board
  $scope.deleteBoard = function(boardToDelete) {
    dataFactory.deleteData(boardToDelete, board)
      .then(function(data) {
        $route.reload();
      });
  };

  $scope.setSelectedBoard = function(clickedBoard) {
    dataFactory.currentBoard = clickedBoard.refKey;
    console.log("dataFactory.currentBoard", dataFactory.currentBoard);
  }

  dataFactory.getData(board)
    .then((boardCollection) => {
      console.log("", boardCollection);
      $scope.boardArray = boardCollection;
    });

});
