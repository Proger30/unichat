import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "../context/AuthContext"

import Chats from "./Chats"
import Login from "./Login"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App




// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDaefmGEac3LtrA3F8NCuLKSXcr7e8IwJs",
//   authDomain: "unichat-3b0e0.firebaseapp.com",
//   projectId: "unichat-3b0e0",
//   storageBucket: "unichat-3b0e0.appspot.com",
//   messagingSenderId: "280536144024",
//   appId: "1:280536144024:web:9a9d7ee6f03d7eec8058ed"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);


// npm install -g firebase-tools