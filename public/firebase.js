var app_firebase = {};
(function() {
    //initialise firebase
    var config = {
        apiKey: "AIzaSyBV5YR-ecpmGF18-Shc5wd-9QSwbVHlENc",
        authDomain: "the-baker-s-table-8f238.firebaseapp.com",
        projectId: "the-baker-s-table-8f238",
        storageBucket: "the-baker-s-table-8f238.appspot.com",
        messagingSenderId: "1096217288058",
        appId: "1:1096217288058:web:687e0a116d1ac9aa4bcac3",
        measurementId: "G-NM7LZPDDDX"
    };

    firebase.initializeApp(config);

    app_firebase = firebase;
})()