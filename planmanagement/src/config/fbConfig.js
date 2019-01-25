 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDzP1OdsDouUMr-Ad64gxOUSxrgCnw6sOk",
    authDomain: "plan-management-system.firebaseapp.com",
    databaseURL: "https://plan-management-system.firebaseio.com",
    projectId: "plan-management-system",
    storageBucket: "plan-management-system.appspot.com",
    messagingSenderId: "547584488612"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;