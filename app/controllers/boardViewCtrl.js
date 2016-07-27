'use strict';

app.controller('boardView', function($scope, dataFactory, authFactory, $route) {

  var board = true; //this tell the getData() that it is looking for boards
  $scope.boardArray = []; //board object array
  $scope.userToShow = null;
  $scope.userToShow = authFactory.getUser();
  console.log("scoped userToShow", $scope.userToShow );

  //delete board
  $scope.deleteBoard = function(boardToDelete) {
    dataFactory.deleteData(boardToDelete, board)
      .then(function(data) {
        $route.reload();
      });
  };

  //sets the current board var to the refKey of the board.
  //this is to make it easier to compare the pins that go
  //with each board later
  $scope.setSelectedBoard = function(clickedBoard) {
    dataFactory.currentBoard = clickedBoard.refKey;
  }

  //get the boards data
  dataFactory.getData(board)
    .then((boardCollection) => {
      $scope.boardArray = boardCollection;
  });
});
