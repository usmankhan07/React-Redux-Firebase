 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';

   // Initialize Firebase
   var config = {
    apiKey: "AIzaSyDo_PXjzbFz0aJVRElFa-I8Gbk-f-Lq4Ik",
    authDomain: "plan-management-system-2f86e.firebaseapp.com",
    databaseURL: "https://plan-management-system-2f86e.firebaseio.com",
    projectId: "plan-management-system-2f86e",
    storageBucket: "plan-management-system-2f86e.appspot.com",
    messagingSenderId: "1065360764265"
  };
  firebase.initializeApp(config);

  firebase.firestore().settings({timestampsInSnapshots:true});
  export default firebase;