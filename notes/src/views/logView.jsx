import React from "react";
import '../App.css';
import Google from "../components/google";
import Login from "../components/login";
import SubmitLog from "../components/submitLog";
import Logo from "../components/mainLogo";
// import { AuthProvider } from "../Hooks/authContext";

export default function LogView (){
    return(
        <div className="logView">
            
              <Logo />
              <Login />
              <Google />
              <SubmitLog />
            
        </div>
    )
}