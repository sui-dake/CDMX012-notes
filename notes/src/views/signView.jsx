import React from "react";
import '../App.css';
import Logo from "../components/mainLogo";
import SemiLogo from "../components/semiLogo";
import SignIn from "../components/signin";
//import { AuthProvider } from "../Hooks/authContext";

export default function SignView (){
    return (
        <div className="SignView">
            
              <Logo />
              <SignIn />
              <SemiLogo />
            
        </div>
    )
}