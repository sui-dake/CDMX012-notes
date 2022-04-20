import React from "react";
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import '../App.css';
import useForm2 from "../Hooks/useForm";
import logo from '../images/google_logo.png';
import { app, auth, login, provider, signUp } from "../firebaseApp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Prueba (email, pass) {
  const navi = useNavigate();
    createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navi('/notes')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
function SignIn() {
    const formSignIn = () => {
      console.log('callback function when form is submitted!')
      console.log('form values', values);
      const authName = values.username
      const authEmail = values.email
      const authPass = values.password
      console.log(authEmail, authName, authPass);
    }
   //Custom hook call
   const {handleChange, values,errors,handleSubmit } = useForm2(formSignIn);
   const authName = values.username
   const authEmail = values.email
   const authPass = values.password
   
      return (
          <div className="App" id="mainCont"> 
              <form onSubmit={handleSubmit}>
                  <h1 id="SignInTxt">Sign In</h1>
                  <input className = 'emailPass' type= 'text' name= 'email' placeholder="E-mail"  onChange={handleChange}  />
                  {
                    errors.email && <h3>{errors.email}</h3>
                  }
                  <input className = 'emailPass' type= 'password' name= 'password' placeholder="Password" onChange={handleChange} />
                  {
                    errors.password && <h3>{errors.password}</h3>
                  }
                  <input className = 'emailPass' type= 'text' name= 'username' placeholder="Username"  onChange={handleChange}  />
                  {
                    errors.username && <h3>{errors.username}</h3>
                  }
                  <button type= 'submit' value= 'Create' className="submit" onClick={Prueba(authEmail, authPass)}>
                
                </button>
                  {/* {console.log('form values', values);} */}
              </form>
                {/* <nav id ='newAcc' type= 'button' value= 'Create an account' className="submit">
                <Link to='/notes'>Create an account</Link>
                <Outlet/>
                </nav> */}
          </div>
      );      
  }
  export default SignIn;