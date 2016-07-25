'use strict';

const app = angular.module("pinApp", ['ngRoute']);
.constant('FirebaseURL', "https://tbd-pintrest.firebaseio.com");

app.config(function ($routeProvider, FBcreds) {

  let authConfig = {
    apiKey: FBcreds.apiKey,
    authDomain: FBcreds.authDomain
  };
  firebase.initializeApp(authConfig);

});
