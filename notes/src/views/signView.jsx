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
import useForm from "../Hooks/useForm";
import logo from '../images/google_logo.png';
import { app, auth, login, provider, signUp } from "../firebaseApp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Logo from "../components/mainLogo";
import SemiLogo from "../components/semiLogo";
import SignIn from "../components/signin";
import { AuthProvider } from "../Hooks/authContext";

export default function SignView (){
    return (
        <div className="SignView">
            
              <Logo />
              <SignIn />
              <SemiLogo />
            
        </div>
    )
}