'use strict';
const app = angular.module("pinApp", ['ngRoute'])
.constant('FirebaseURL', "https://tbd-pintrest.firebaseio.com");

app.config(function ($routeProvider, FBCreds) {

  let authConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain
  };

  firebase.initializeApp(authConfig);


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
    .when('/boards/pins', {
      templateUrl: 'partials/pinView.html',
      controller: 'pinView'
    })
    .when('/boards/pins/new', {
      templateUrl: 'partials/newPin.html',
      controller: 'newPinCtrl'
    })
    .otherwise('/login');

});
