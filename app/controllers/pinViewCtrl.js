'use strict';

app.controller('pinView', function($scope, dataFactory, $route) {

  var board = false;
  $scope.pinArray = [];
  //delete pin card

  $scope.deletePin = function(pinToDelete) {
    dataFactory.deleteData(pinToDelete, board)
      .then(function(data) {
        $route.reload();
      });
  };

  dataFactory.getData(board)
    .then((pinCollection) => {
      console.log("pin collection", pinCollection);
      $scope.pinArray = pinCollection;
    });

});