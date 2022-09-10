
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyBsQzAo3zJ63-OPL-RBblsM2N7ycXYh-7o",
  authDomain: "kwitter-app-db06e.firebaseapp.com",
  databaseURL: "https://kwitter-app-db06e-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-db06e",
  storageBucket: "kwitter-app-db06e.appspot.com",
  messagingSenderId: "748459469699",
  appId: "1:748459469699:web:d6b5b024bd23daed7164b6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("welcome").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;


      //End code
    });
  });
}
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);

  window.location = "kwitter_page.html";
}

function logOut(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}