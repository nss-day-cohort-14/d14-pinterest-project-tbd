'use strict';

app.factory('authFactory', function() {

  let currentUserId = null;
  let googleProvider = new firebase.auth.GoogleAuthProvider();

  //onAuthStateChanged function to keep current UserId set correctly. 
  	//in the if set UID var to UID
  	//in the else set UID var to null

  //Auth function that takes in a generic provided (so it works with email or google eventually)

  //isAuth function to see if currentUserId === true

  //getUser function returns current userId


});
