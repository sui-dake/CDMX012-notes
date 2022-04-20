import {
    Link,
  } from "react-router-dom";

export default function SubmitLog (){
    return(
        <nav id ='newAcc' type= 'button' value= 'Create an account' className="submit" >
              <Link to='/signin'style={{textDecoration: 'none'}} >Create an account</Link>
                </nav>
    )
}