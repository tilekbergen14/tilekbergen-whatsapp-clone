import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDhilFhBJmuTtlC1Y7U4jwIQWry7uy-cI4",
    authDomain: "tilekbergens-whatsapp-clone.firebaseapp.com",
    projectId: "tilekbergens-whatsapp-clone",
    storageBucket: "tilekbergens-whatsapp-clone.appspot.com",
    messagingSenderId: "268643435556",
    appId: "1:268643435556:web:451a973d7fd85a817bc4b1",
    measurementId: "G-GD2MPQPEGC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db