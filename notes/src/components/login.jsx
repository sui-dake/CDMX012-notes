import React,{ useState } from "react";
import {
  useNavigate,
} from "react-router-dom";
import '../App.css';
import useForm from "../Hooks/useForm";
import { auth } from "../firebaseApp";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginFun } from "../firebaseApp";
//import { useAuth } from "../Hooks/authContext";


// function SubmitingLog (){
//   return (
//     <Link to='/notes'></Link>
//     <Outlet/>
//   )
// }

function Login() {
  const navi = useNavigate();
    const formLogin = () => {
    // console.log('callback function when form is submitted!')
    // console.log('form values', values);
    console.log(authEmail, authName, authPass);
    // LoginFun(authEmail, authPass)
      signInWithEmailAndPassword(auth, authEmail, authPass)
        .then((userCredential) => {
      // Signed in 
      //const user = userCredential.user;
      // ...
      console.log('loggeadx!')
        navi('/notes')
      })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        // ..
      });
    
  }
 //Custom hook call
 const {handleChange, values,errors,handleSubmit } = useForm(formLogin);
 const authName = values.username
 const authEmail = values.email
 const authPass = values.password
        return (
        <div className="App" id="mainCont">
            <form onSubmit={handleSubmit}>
                <h1 id="loginTxt">Log In</h1>
                <input className = 'emailPass' type= 'text' name= 'email' placeholder="E-mail" onChange={handleChange}  />
                {
                  errors.email && <h3>{errors.email}</h3>
                }
                <input className = 'emailPass' type= 'password' name= 'password' placeholder="Password" onChange={handleChange}  />
                {
                  errors.password && <h3>{errors.password}</h3>
                }
                <input className = 'emailPass' type= 'text' name= 'username' placeholder="Username" onChange={handleChange}  />
                {
                  errors.username && <h3>{errors.username}</h3>
                }
                <button type= 'submit' className="submit">Submit</button>
                {console.log('form values', values)} 
            </form>
        </div>
    );
    
    
}
export default Login;
