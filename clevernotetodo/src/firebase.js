import firebase from 'firebase'
  
  const firebaseConfig = {
    apiKey: "AIzaSyCR1UP8SJdc_hBIyVulANfVDmicu7rBNu8",
    authDomain: "clevernotetodo.firebaseapp.com",
    databaseURL: "https://clevernotetodo-default-rtdb.firebaseio.com",
    projectId: "clevernotetodo",
    storageBucket: "clevernotetodo.appspot.com",
    messagingSenderId: "1099337936528",
    appId: "1:1099337936528:web:e68dfa1bcbfa72923cb215"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.database()
  const auth = firebase.auth()
  
  export {auth}
  export default db