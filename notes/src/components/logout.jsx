//import { useAuth } from "../Hooks/authContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseApp";
import { signOut } from "firebase/auth";

export default function Logout (){
    // const {logout, user} = useAuth();
    const navi = useNavigate();

    //console.log(user);
    const handleLogout =() =>{
        
            signOut(auth).then(() => {
                // Sign-out successful.
                navi ('/login')
              }).catch((error) => {
                // An error happened.
                console.log('logout error')
              });
    }
    return (
        <div style={{display: 'flex', justifyContent:'flex-end'}}>
          <button onClick={handleLogout} style={{borderRadius: '20px', backgroundColor: '#C2D5E4', border: 'none', margin: '0 10px 0 0', padding:'8px'}}>LOGOUT</button>
        </div>
    )
}