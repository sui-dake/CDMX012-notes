import logo from '../images/google_logo.png';
import { logGoogle } from '../firebaseApp';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../Hooks/authContext';
// import { async } from '@firebase/util';

export default function Google (){
    const { googleLogin } = useAuth();
    const [error, setError] = useState("");
    const navi = useNavigate();
    
    const handleGoogle = async () =>{
        try{
            await googleLogin();
            navi('/notes');
        } catch(error){
            setError(error.message);
        }
    };

    return(
        <figure className='googleBtn' onClick={logGoogle}>
            <img id ='googleBtn' type ='button' src={logo} alt="google" onClick={handleGoogle}/>
        </figure>
   
    )
}