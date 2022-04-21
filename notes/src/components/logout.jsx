import { useAuth } from "../Hooks/authContext";
import { useNavigate } from "react-router-dom";

export default function Logout (){
    // const {logout, user} = useAuth();
    const navi = useNavigate();

    //console.log(user);
    const handleLogout = /*async*/ () =>{
        try{
            //await logout();
            navi ('/login')
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div>
          <button onClick={handleLogout}>LOGOUT</button>
        </div>
    )
}