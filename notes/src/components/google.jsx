import logo from '../images/google_logo.png';
import { auth, provider } from '../firebaseApp';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

//import { useAuth } from '../Hooks/authContext';
// import { async } from '@firebase/util';

export default function Google (){
    //const { googleLogin } = useAuth();
    const [error, setError] = useState("");
    const navi = useNavigate();
    
    const handleGoogle = () =>{
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            navi('/notes')
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
    };

    return(
        <figure className='googleBtn' >
            <img id ='googleBtn' type ='button' src={logo} alt="google" onClick={handleGoogle}/>
        </figure>
   
    )
}