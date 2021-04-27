  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCabG2_nFSl8IRj6ZMHS5XQDOoD9wQ61Zo",
    authDomain: "testdatabase-6145c.firebaseapp.com",
    projectId: "testdatabase-6145c",
    storageBucket: "testdatabase-6145c.appspot.com",
    messagingSenderId: "958036782751",
    appId: "1:958036782751:web:50135bb75fc3b13620fcaa",
    measurementId: "G-7K6F0XHQ6P"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const auth = firebase.auth();

  function Register(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      
      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));

      alert("Registered");
  }

  function Login(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Logged In As: " + email.value);

    //Take user to a new page
    if (auth.signInWithEmailAndPassword == true){
        window.location.href = "http://127.0.0.1:5500/user.html";
    }
}

function Logout(){
    auth.Logout();
    alert("Logged Out");

}

auth.onAuthStateChanged(function(user){

    if(user){
        //is signed in
        var email = user.email;
        alert("Active User " + email);
    }
    else{
        //no user signed in
        alert("No Active User on Page");
    }
});