import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAfj4sjxrML5axpi-ItLkpbLSxFcQi9wXA",
	authDomain: "react-tp-f77ab.firebaseapp.com",
	projectId: "react-tp-f77ab",
	storageBucket: "react-tp-f77ab.appspot.com",
	messagingSenderId: "679848724132",
	appId: "1:679848724132:web:eb8899fcdccdde9a7bc831",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
