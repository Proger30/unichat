import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
	apiKey: "AIzaSyDaefmGEac3LtrA3F8NCuLKSXcr7e8IwJs",
	authDomain: "unichat-3b0e0.firebaseapp.com",
	projectId: "unichat-3b0e0",
	storageBucket: "unichat-3b0e0.appspot.com",
	messagingSenderId: "280536144024",
	appId: "1:280536144024:web:9a9d7ee6f03d7eec8058ed"
  }).auth();