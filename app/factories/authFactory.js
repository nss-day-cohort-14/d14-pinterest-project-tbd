'use strict';

app.factory('authFactory', function() {

  let currentUserId = null;
  let googleProvider = new firebase.auth.GoogleAuthProvider();

  //onAuthStateChanged function to keep current UserId set correctly.
  //in the if set UID var to UID
  //in the else set UID var to null
  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     console.log("user logged in");
  //     currentUserId = user.uid;
  //   } else {
  //     console.log("user not logged in");
  //     currentUserId = null;
  //     // $location.url("/login");
  //   }
  // });

  //Auth function that takes in a generic provided (so it works with email or google eventually)
  let authWithProvider = function(provider) {
    return firebase.auth().signInWithPopup(provider);
  };

  //isAuth function to see if currentUserId === true
  let isAuthenticated = function() {
    return (currentUserId) ? true : false;
  };

  //getUser function returns current userId
  let getUser = function() {
    return currentUserId;
  };

  let setUser = function(id) {
    currentUserId = id;
  };

  let createWithEmail = function (email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.warn(errorCode, errorMessage);
    });
  };

  let authWithEmail = function (email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.warn(errorCode, errorMessage);
    });
  };

  return {
    authWithProvider, isAuthenticated, getUser, setUser, googleProvider, createWithEmail, authWithEmail
  };

});

app.run(["$location", "FBCreds", "authFactory", function ($location, FBCreds, authFactory) {
  let authConfig = {
    apiKey: FBCreds.apiKey,
    authDomain: FBCreds.authDomain
  };

  firebase.initializeApp(authConfig);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      authFactory.setUser(user.uid);
      $location.url("/boards");
    } else {
      $location.url("/login");
    }
  });
}]);
