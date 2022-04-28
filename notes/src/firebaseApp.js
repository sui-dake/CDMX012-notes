import { initializeApp } from "firebase/app";
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup  } from "firebase/auth";
import { getFirestore, collection, doc, onSnapshot, query, where, getDocs } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQnj0qKKZDjukg4pt6ePqgeTnTIkncg-U",
  authDomain: "no-to-c2e0e.firebaseapp.com",
  projectId: "no-to-c2e0e",
  storageBucket: "no-to-c2e0e.appspot.com",
  messagingSenderId: "591734850492",
  appId: "1:591734850492:web:a9780d2a4c9481175121b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


export function LoginFun (email, password) {
  const navi = useNavigate();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

export function signUp (email, pass) {
  createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}


export function logGoogle () {
    signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}



export function addNote(callb){
  const q = query(collection(db, "Notes"), where("state", "==", "CA"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const notes = [];
    querySnapshot.forEach((doc) => {
        notes.push(doc.data().name);
    });
    callb(notes)
  });
}

export const unsub = (callback) =>{
  const data = collection(db, 'Notes');
  const sortData = query(data, where('state', '==', 'CA'))
  let noteArr = [];
  onSnapshot(sortData, (snapshot) => {
    snapshot.forEach((noto) => {
      if(noto.metadata.hasPendingWrites){
        if(noto.exists){
          noteArr.push({
            id: noto.id,
            ...noto.data(),
          });
        } else {
          // borra
        }
      } else {
        noteArr.push({
          id: noto.id,
          ...noto.data(),
        });
      }
    });
    callback(noteArr);
  })
}