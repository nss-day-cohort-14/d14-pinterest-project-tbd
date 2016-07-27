'use strict';


app.controller('detailsCtrl', function ($scope, dataFactory, $routeParams) {
  $scope.openModal = function () {
    $('#modal2').openModal();
  };
  $scope.openModal();

  // $scope.pinId =
  $scope.pinArray = [];

  $scope.setSelectedPin = function(clickedPin) {
    dataFactory.currentPin = clickedPin.refKey;
  }

  dataFactory.getData(false)
    .then((pinCollection) => {
      console.log("pin collection", pinCollection);
      $scope.pinArray = pinCollection;
      $scope.selectedPin = $scope.pinArray.filter((pin) => {
        return pin.refKey === $routeParams.pinId;
      })[0]; //I took out an index 0 call here
    });
});
