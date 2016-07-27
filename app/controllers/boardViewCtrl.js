'use strict';

app.controller('boardView', function($scope, dataFactory, authFactory, $route) {

  var board = true; //this tell the getData() that it is looking for boards
  $scope.boardArray = []; //board object array
  $scope.userToShow = null;
  $scope.userToShow = authFactory.getUser();
  console.log("scoped userToShow", $scope.userToShow);

  //delete board
  $scope.deleteBoard = function(refKey) {
    dataFactory.deleteData(refKey, board)
      .then(function(data) {
        $route.reload();
        dataFactory.getData(false)
          .then((pinCollection) => {
            console.log("pin collection", pinCollection);
            $scope.pinArray = pinCollection;
            $scope.selectedBoardPins = $scope.pinArray.filter((pin) => {
              return pin.boardKey === refKey;
            })
            for (let index in $scope.selectedBoardPins) {
              dataFactory.deleteData($scope.selectedBoardPins[index].refKey, false)
            }
            //I took out an index 0 call here
          });
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