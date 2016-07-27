'use strict';
const app = angular.module("pinApp", ['ngRoute'])
.constant('FirebaseURL', "https://tbd-pintrest.firebaseio.com");

app.config(function ($routeProvider) {


  //routing
  $routeProvider
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl'
    })
    .when('/boards', {
      templateUrl: 'partials/boardView.html',
      controller: 'boardView'
    })
    .when('/boards/new', {
      templateUrl: 'partials/newBoard.html',
      controller: 'newBoardCtrl'
    })
    .when('/boards/:boardId', {
      templateUrl: 'partials/pinView.html',
      controller: 'pinView'
    })
    .when('/boards/pins/new', {
      templateUrl: 'partials/newPin.html',
      controller: 'newPinCtrl'
    })
    .otherwise('/boards');

});
