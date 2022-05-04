import React from "react";
import { useNavigate } from "react-router-dom";
import useSave from "../Hooks/saveForm";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db, auth } from "../firebaseApp";

export default function EditNote (props){
    const navi = useNavigate();
    const editNote = async () => {
        const noteCollection = doc(db, 'Notes', id)
        await updateDoc(noteCollection, {
            title: titVal, note: contVal, editDate: new Date()
        })
        navi('/notes')
    }
    const { handleChange, values, errors, handleSubmit } = useSave(editNote)
    const {title, content, id} = props
    const titVal = values.Title
    const contVal = values.Content
    return (
        
        <main style={{backgroundColor: '#C2D5E4', borderRadius: '15px', padding: '5px 0 20px 0', margin:'0 5% 0 5%'}}>
            <form onSubmit={handleSubmit}>
                <input style={{borderRadius: '15px', border: 'none', backgroundColor:'#F9E8F2'}} name='Title' placeholder="Title" onChange={handleChange} value={title}/>
                {
                  errors.Title && <h3>{errors.Title}</h3>
                }
                <input style={{borderRadius: '15px', border: 'none', backgroundColor:'#F9E8F2'}} name='Content' placeholder="Description" onChange={handleChange} value={content}/>
                {
                  errors.Description && <h3>{errors.Content}</h3>
                }
                <button type= 'submit' className="submit">Submit</button>
                {console.log(values)}
            </form>
        </main>
        
    )
}