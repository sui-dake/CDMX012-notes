import React from "react";
import {
  BrowserRouter, Routes,
  Switch,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import '../App.css';
import Google from "../components/google";
import Login from "../components/login";
import SubmitLog from "../components/submitLog";
import Logo from "../components/mainLogo";
import { AuthProvider } from "../Hooks/authContext";

export default function LogView (){
    return(
        <div className="logView">
            <AuthProvider>
              <Logo />
              <Login />
              <Google />
              <SubmitLog />
            </AuthProvider>
        </div>
    )
}