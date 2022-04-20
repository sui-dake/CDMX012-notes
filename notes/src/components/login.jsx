import { useState } from "react";
import {
  BrowserRouter, Routes,
  Switch,
  Route,
  Link,
  useNavigate,
  Outlet
} from "react-router-dom";
import '../App.css';
import useForm from "../Hooks/useForm";
// import logo from '../images/google_logo.png';
import { app, auth, logGoogle, login, signUp } from "../firebaseApp";
import { useAuth } from "../Hooks/authContext";


// function SubmitingLog (){
//   return (
//     <Link to='/notes'></Link>
//     <Outlet/>
//   )
// }

function Login() {
  const formLogin = () => {
    console.log('callback function when form is submitted!')
    console.log('form values', values);
    // const authName = values.username
    // const authEmail = values.email
    // const authPass = values.password
    // console.log(authEmail, authName, authPass);
    
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
                <input type= 'submit' value= 'Submit' className="submit" onClick={handleSubmit}/>
                {/* {console.log('form values', values);} */}
            </form>
        </div>
    );
    console.log(values)
    
}
export default Login;

