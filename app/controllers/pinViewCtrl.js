'use strict';

app.controller('pinView', function($scope, dataFactory, $route, $routeParams) {

  var board = false;
  $scope.pinArray = [];
  //delete pin card


  $scope.deletePin = function(refKey) {
    dataFactory.deleteData(refKey, board)
      .then(function(data) {
        $route.reload();
      });
  };

  dataFactory.getData(board)
    .then((pinCollection) => {
      console.log("pin collection", pinCollection);
      $scope.pinArray = pinCollection;
      $scope.selectedBoardPins = $scope.pinArray.filter((pin) => {
        return pin.boardKey === $routeParams.boardId;
      }); //I took out an index 0 call here
      console.log("", $scope.selectedBoardPins);
    });

});