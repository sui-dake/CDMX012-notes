import { collection, onSnapshot, query, where} from "firebase/firestore";
import { db } from "../firebaseApp"
//import Notes from "./notes";
import { useEffect, useState } from "react";
import logo from '../images/trash.png';
import { Link } from 'react-router-dom';
import Delete from "./delete";

// const unsubs = () =>{
//     const data = collection(db, 'Notes');
//     const sortData = query(data, where('state', '==', 'CA'))
//     let noteArr = [];
//     onSnapshot(sortData, (snapshot) => {
//         console.log(snapshot);
//       snapshot.forEach((noto) => {
//         console.log(noto.data().title);
//         if(noto.metadata.hasPendingWrites){
//           if(noto.exists){
//             noteArr.push({
//               id: noto.id,
//               ...noto.data(),
//             });
//           } else {
//             // borra
//           }
//         } else {
//           noteArr.push({
//             id: noto.id,
//             ...noto.data(),
//           });
//         }
//       });
//       return noteArr;
//     })
// //   }
// const data = collection(db, 'Notes');
// const w = query(data,  where('state', '==', 'CA'));
// export const unsubscribe = (funct) => {
  
//   onSnapshot(w, (snapshot) => {
//     const changes = snapshot.docChanges();
//    console.log(changes);
//     return funct(changes);
//   });
// };
// export const dbNotes = (notes) =>{
//     notes.forEach(doc => {
//         <section>
//        <p>{doc.title}</p>
//        <p>{doc.description}</p>
//        </section>
//         // const dbs = [{
//         //     // id: docu.id,
//         //     title: doc.title,
//         //     description: doc.note,
//         // }
    
//     });
//     // unsubscribe(dbNotes);
//     // return returning;
    
// }

//const holi = unsubscribe(dbNotes)
// const dbss = [{
    
//     id: 'docu.id',
//     title: 'docu.title',
//     description: 'docu.note',
// },{
//     id: '123',
//     title: 'one',
//     description: 'description',
// }
// ]    
export default function Appnotes (){
    const [ notas, setNota] = useState([]);
    const noteCollection = collection(db, 'Notes');
    const noteQuery = query(noteCollection,  where('title', '!=', 'CA'));
    // const realTime = onSnapshot(noteQuery, (querySnapshot)=>{

    // })

    useEffect(() =>{
        let postArray = []
        const getNotes =  () =>{
            const data =  onSnapshot(noteQuery,(snapshot)=>{
                // const changes = snapshot.docChanges()
                setNota(snapshot.docChanges().map((doc) => (
                    {
                    ...doc.doc.data(), id: doc.doc.id})))
            })
            
            ;
        };

        getNotes();
    }, []);
    //INVESTIGAR BIEN USE EFFECT
    return(
        <section id="notesContainer">
            {notas.map((nota) => (
           
           
                 <figure className="singleNote" >
                     <Link to={`/addNote/${nota.id}`} style={{textDecoration: 'none'}}>
                    <h1 style={{margin: '0'}}>{nota.title}</h1>
                    <p>{nota.note}</p>                    
                    </Link>
                    <Delete id={nota.id}/>
                </figure>
                
            ))}
            {/* <button onClick={()=>{
                setNota(
                    dbss
                )
                console.log()
            }}>boton</button> */}
        </section>
    )
}
     


   
