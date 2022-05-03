import { db } from "../firebaseApp"
import { doc, deleteDoc } from "firebase/firestore"
import logo from '../images/trash.png';
import { useNavigate } from "react-router-dom";

export default function Delete (props){
    const {id} = props;
    const navi = useNavigate();
    const trash = async(id) => {
        const noteColle = doc(db, 'Notes', id)
        await deleteDoc (noteColle)
        
    }
    return(
        <object>
            <img id ='trashBtn' type ='button' src={logo} alt="trash" style={{width: '10%', height: '10%', }} onClick={()=>{trash(id)}}/>
        </object>
    )
}