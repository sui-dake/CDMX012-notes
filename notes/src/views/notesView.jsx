import React from "react";
import '../App.css';
import NotesHeader from "../components/notesHeader";
//import Notes from "../components/notes";
import Add from "../components/plusIcon";
import Logout from "../components/logout";
//import { AuthProvider } from "../Hooks/authContext";
//import DbNotes from "../components/noteContent";
import Appnotes from "../components/noteContent";

export default function NotesView (){
    return (
        <div id="NotesView">
            
                <NotesHeader />
                <Appnotes />
                <Add />
                <Logout />
            
        </div>
    )
}