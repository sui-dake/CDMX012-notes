import { collection, onSnapshot, orderBy, query, where} from "firebase/firestore";
import { db } from "../firebaseApp"
//import Notes from "./notes";
import { useEffect, useState } from "react";
import logo from '../images/trash.png';
import { Link } from 'react-router-dom';
import Delete from "./delete";
import EditNote from "./editNote";
 
export default function Appnotes (){
    const [ notas, setNota] = useState([]);
    const noteCollection = collection(db, 'Notes');
    const noteQuery = query(noteCollection,  orderBy('date', 'desc'));
    // const realTime = onSnapshot(noteQuery, (querySnapshot)=>{

    // })

    useEffect(() =>{
        
        
            onSnapshot(noteQuery,(snapshot)=>{
                const postArray = []
                // const changes = snapshot.docChanges()
                snapshot.forEach((doc) => {
                    postArray.push({ ...doc.data(), id: doc.id })
                });
                setNota(postArray);
            })
        

        
    }, []);
    //INVESTIGAR BIEN USE EFFECT
    return(
        <section id="notesContainer">
            {notas.map((nota) => (
           
           
                 <figure className="singleNote" >
                     {/* <EditNote title={nota.title} content={nota.note} /> */}
                     <Link to={`/editNote/${nota.id}`} style={{textDecoration: 'none'}}>
                    <h1 style={{margin: '0', textDecoration: 'none'}}>{nota.title}</h1>
                    <p style={{textDecoration: 'none'}}>{nota.note}</p>

                    </Link>
                    <Delete id={nota.id}/>
                </figure>
                
            ))}
           
        </section>
    )
}
