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
import { app, auth, logGoogle, provider, unsub } from "../firebaseApp";
import Invoices from "./invoices";
import { dbNotes } from "./noteContent";


// const dNotes = (notes) =>{
//   notes.forEach(docu => {
//       const dbs = [{
//           id: docu.id,
//           title: docu.title,
//           description: docu.note,
//       }]     
//   });
  
//   unsub(dNotes);
// } 

function Notes (props) {
  const {nota} = props
  console.log(nota)
    return(
        <form id="notesContainer">
            <figure className="singleNote">
              <h1 id="Title">{nota.title}</h1>
              <p>{nota.description}</p>
            </figure>  
        </form>
    )
}
export default Notes;
