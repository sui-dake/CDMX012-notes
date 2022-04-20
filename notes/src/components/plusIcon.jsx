import { Link } from 'react-router-dom';
import logo from '../images/plus2.png';


export default function Add (){
    return(
        <figure className='addBtn'>
            <Link to='/signin'><img id ='addBtn' type ='button' src={logo} alt="add" /></Link>            
        </figure>
    )
}