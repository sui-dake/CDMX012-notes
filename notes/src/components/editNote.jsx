import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import useSave from "../Hooks/saveForm";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebaseApp";
import { async } from "@firebase/util";

export default function EditNote (){
    const { id } = useParams();
    const [data, setData] = useState([]);
    const navi = useNavigate();
    const editNote = async () => {
        const noteCollection = doc(db, 'Notes', id)
        await updateDoc(noteCollection, {
            title: titVal, note: contVal, editDate: new Date()
        })
        navi('/notes')
    }
    const readNote = async () => {
        const content = [];
        const snap = await getDoc(doc(db, 'Notes', id))
        content.push(snap.data());
        setData(content);
    }
    const { handleChange, values, errors, handleSubmit } = useSave(editNote)
    
    const titVal = values.Title
    const contVal = values.Content

    useEffect(() =>{
        readNote();
    }, []);
    return (
        
        <main style={{backgroundColor: '#C2D5E4', borderRadius: '15px', padding: '5px 0 20px 0', margin:'0 5% 0 5%'}}>
            {data.map((data) => (
            <form  key={data.id} onSubmit={handleSubmit}>
                <input style={{borderRadius: '15px', border: 'none', backgroundColor:'#F9E8F2'}} name='Title' placeholder="Title" onChange={handleChange} defaultValue={data.title}/>
                {
                  errors.Title && <h3>{errors.Title}</h3>
                }
                <input style={{borderRadius: '15px', border: 'none', backgroundColor:'#F9E8F2'}} name='Content' placeholder="Description" onChange={handleChange} defaultValue={data.note}/>
                {
                  errors.Description && <h3>{errors.Content}</h3>
                }
                <button type= 'submit' className="submit">Submit</button>
                {console.log(values)}
            </form>
            ))}
        </main>
        
    )
}