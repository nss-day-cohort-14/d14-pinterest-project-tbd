'use strict';


app.controller('detailsCtrl', function ($scope) {
  $scope.openModal = function () {
    $('#modal2').openModal();
  };
  $scope.openModal();
});
