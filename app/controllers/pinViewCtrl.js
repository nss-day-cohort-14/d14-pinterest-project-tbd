'use strict';

app.controller('pinView', function ($scope, dataFactory) {

	var board = false;
	$scope.pinArray = [];
	//delete pin card

	$scope.deletePin = function() {
    console.log("clicked delete");
  };

	dataFactory.getData(board)
    .then((pinCollection) => {
      console.log("pin collection", pinCollection);
      $scope.pinArray = pinCollection;
    });

});
