import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import firebaseCredentials from "../firebaseCredentials";

const firebaseConfig = firebaseCredentials;
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = firebase.auth();

// FIREBASE USERS REFERENCE
function addUserToDatabase(userId, name, surname, email, password) {
    database.ref('users').child(userId).set({
        name: name,
        surname: surname,
        email: email,
        password: password,
      });    
  }

//FIREBASE AUTHENTICATION
function signIn (email, password) {
    auth.signInWithEmailAndPassword(email, password).then(()=>{
        
      }).catch(function(error) {
        if (error) {
          console.log('Error de registro: ', error);
        }
    });
}

function signUp (name, surname, email, password) {
    auth.createUserWithEmailAndPassword(email, password).then(()=>{
        addUserToDatabase(auth.currentUser.uid, name, surname, email, password);
      }).catch(function(error) {
        if (error) {
          console.log('Error de registro: ', error);
        }
    });
}

export default {signIn, signUp};