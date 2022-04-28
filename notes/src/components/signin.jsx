import React from "react";
import '../App.css';
import useForm2 from "../Hooks/useForm2";
import { auth } from "../firebaseApp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function SignIn() {
  const navi = useNavigate();
    const formSignIn = () => {
     
      // console.log('callback function when form is submitted!')
      // console.log('form values', values);
       console.log(authEmail, authName, authPass);
      // function Prueba (email, pass) {
      //   console.log(email, pass)
      //   
          createUserWithEmailAndPassword(auth, authEmail, authPass)
          .then((userCredential) => {
            // Signed in 
            // const user = userCredential.user;
            navi('/notes')
          })
          .catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // // ..
          });
        
        
          
    }
   //Custom hook call
   const {handleChange, values,errors,handleSubmit } = useForm2(formSignIn);
   const authName = values.username
   const authEmail = values.email
   const authPass = values.password
   
  //  const handleChangeData=(event)=>{
  //    const {target}=event;
  //    const { name, value}=target;
  

  //  const handleSubmitForm=(e)=>{
  //    e.preventDefault()
      
  //     //Prueba(authEmail, authPass)
  //   }
  //    const newValues={
  //      ...values,
  //      [name]:value
  //    }
  //    setFormValues(newValues)
  //  }
        return (
          <div className="App" id="mainCont"> 
              <form onSubmit={handleSubmit} >
                  <h1 id="SignInTxt">Sign In</h1>
                  <input className = 'emailPass' type= 'text' name= 'email' placeholder="E-mail"  onChange={handleChange} />
                  {
                    errors.email && <p>{errors.email}</p>
                  }
                  <input  minLength='8' className = 'emailPass' type= 'password' name= 'password' placeholder="Password" onChange={handleChange} />
                  {
                    errors.password && <p>{errors.password}</p>
                  }
                  <input  minLength='5' className = 'emailPass' type= 'text' name= 'username' placeholder="Username" onChange={handleChange}  />
                  {
                    errors.username && <p>{errors.username}</p>
                  }
                  <button type= 'submit' className="submit" >Create</button>
                   {console.log('form values', values)} 
              </form>
          </div>
      );      
  }
  export default SignIn;

