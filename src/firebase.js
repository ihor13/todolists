import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAeQL-mWd7pVS5L2NZ93slYR3LnjRddJ0g",
    authDomain: "todoist-tut-56163.firebaseapp.com",
    databaseURL: "https://todoist-tut-56163.firebaseio.com",
    projectId: "todoist-tut-56163",
    storageBucket: "todoist-tut-56163.appspot.com",
    messagingSenderId: "1023639076210",
    appId: "1:1023639076210:web:e526f8fbc28b32b010b1eb"
})

export { firebaseConfig as firebase };