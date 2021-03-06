'use strict';

app.controller('loginCtrl', function ($scope, $route, authFactory) {

	$scope.openModal = function () {
    $('#modal1').openModal({dismissible:false});
  };
  $scope.openModal();

  $scope.login = function(){
  	console.log("Login initialized");
    authFactory.authWithProvider(authFactory.googleProvider)
    .then(function(result) {
      var user = result.user.uid;
      console.log("logged in user", user);
    }).catch(function(error) {
      console.log(error);
    });
  };

  $scope.newEmail = function () {
    authFactory.createWithEmail($scope.email, $scope.password)
    .then(function(result) {
      // var user = result.uid;
      console.log("logged in user", result.uid);
    })
    .catch(function(err) {
      console.log(error);
    });
  };

  $scope.existingEmail = function () {
    authFactory.authWithEmail($scope.email, $scope.password)
    .then(function(result) {
    })
    .catch(function(err) {
      console.log(err);
    })
  };
});
