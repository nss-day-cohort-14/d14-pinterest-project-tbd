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

});
