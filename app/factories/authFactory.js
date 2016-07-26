'use strict';

app.factory('authFactory', function() {

  let currentUserId = null;
  let googleProvider = new firebase.auth.GoogleAuthProvider();

  //onAuthStateChanged function to keep current UserId set correctly. 
  //in the if set UID var to UID
  //in the else set UID var to null
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("user logged in");
      currentUserId = user.uid;
      // $location.url("/start");
    } else {
      console.log("user not logged in");
      currentUserId = null;
      // $location.url("/login");
    }
  });

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

  return {
    authWithProvider, isAuthenticated, getUser, googleProvider
  };

});