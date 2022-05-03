import { Link } from 'react-router-dom';
import logo from '../images/plus2.png';


export default function Add (){
    return(
        <figure className='addBtn' style={{position: 'fixed'}}>
            <Link to='/addNote'><img id ='addBtn' type ='button' src={logo} alt="add" /></Link>            
        </figure>
    )
}

//style={{position: 'fixed', float:'left'}}