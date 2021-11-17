var app_firebase = {};
(function(){
  //initialise firebase
var config = {
    apiKey: "AIzaSyAYFeIvzP0HDYhX9BgWt-s7_RCbQz8LV2k",
    authDomain: "bakers-table-f7629.firebaseapp.com",
    projectId: "bakers-table-f7629",
    storageBucket: "bakers-table-f7629.appspot.com",
    messagingSenderId: "1076761039635",
    appId: "1:1076761039635:web:b673a005d8ad50b1cf40e6"
  };

firebase.initializeApp(config);

  app_firebase = firebase;
})()