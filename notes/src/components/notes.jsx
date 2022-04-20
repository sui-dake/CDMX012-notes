import React from "react";
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import useForm from "../Hooks/useForm";
import logo from '../images/google_logo.png';
import { app, auth, logGoogle, provider } from "../firebaseApp";
import Invoices from "./invoices";

function Notes () {
    return(
        <div id="notesContainer">
            <figure className="singleNote">
              <h1 id="Title">Title</h1>
              <p placeholder="Description">Description</p>
            </figure>  
        </div>
    )
}
export default Notes;
