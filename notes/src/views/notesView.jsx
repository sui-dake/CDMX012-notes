import React from "react";
import '../App.css';
import NotesHeader from "../components/notesHeader";
import Notes from "../components/notes";
import Add from "../components/plusIcon";
import Logout from "../components/logout";
import { AuthProvider } from "../Hooks/authContext";

export default function NotesView (){
    return (
        <div id="NotesView">
            <AuthProvider>
                <NotesHeader />
                <Notes />
                <Add />
                <Logout />
            </AuthProvider>
        </div>
    )
}