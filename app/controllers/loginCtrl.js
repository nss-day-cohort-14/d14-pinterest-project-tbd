'use strict';

app.controller('loginCtrl', function ($scope) {
  $scope.openModal = function () {
    $('#modal1').openModal();
  };

  $scope.openModal();
});
