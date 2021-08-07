


 var firebaseConfig = {
      apiKey: "AIzaSyA7imb0gUvK5Ry8s1-JOR17CG2JNkzmR5o",
      authDomain: "chatting-website-a0755.firebaseapp.com",
      databaseURL: "https://chatting-website-a0755-default-rtdb.firebaseio.com",
      projectId: "chatting-website-a0755",
      storageBucket: "chatting-website-a0755.appspot.com",
      messagingSenderId: "340415150423",
      appId: "1:340415150423:web:7f02fce848fc9f8a4f6612",
      measurementId: "G-E6BG1JFK87"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome " +user_name + "!";
    
    function addRoom(){
          room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="chatting_page.html";
      
    }


function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("room name-"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;

 });
});
}
getData();

function redirecttoRoomName(name){
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location="chatting_page.html";

}

function logout(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="index.html";
 
}

