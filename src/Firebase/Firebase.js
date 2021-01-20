// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAI4hvMOsc1SkK8UOG4vKnHQvXzV7J_pbU",
    authDomain: "slack-clone-146f3.firebaseapp.com",
    projectId: "slack-clone-146f3",
    storageBucket: "slack-clone-146f3.appspot.com",
    messagingSenderId: "808479798962",
    appId: "1:808479798962:web:58a2b83bc04d1403debbab",
    measurementId: "G-R2E0J1XX0R"
  };

  // connecting our app to Firestore(this connects everything up)
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // access to our firestore db
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;