

// Your web app's Firebase configuration
apiKey: "AIzaSyAS_PgyoVT3w8QwW8UV6XYyhVlgWrgyDZw",
authDomain: "let-s-chat-app-2.firebaseapp.com",
projectId: "let-s-chat-app-2",
storageBucket: "let-s-chat-app-2.appspot.com",
messagingSenderId: "1053076932429",
appId: "1:1053076932429:web:adb70a36510dc44bc99904",
measurementId: "G-N209CR8EFN"
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



