import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import './App.css';
import useForm from "./Hooks/useForm";


// function App() {
//   const formLogin = () => {
//     console.log('callback function when form is submitted!')
//     console.log('form values', values);
//   }
//  //Custom hook call
//  const {handleChange, values,errors,handleSubmit } = useForm(formLogin);
//     return (
//         <div className="App">
//           <figure id = 'logo'>ノート<figure id ='subfig' /></figure>
//             <form onSubmit={handleSubmit}>
//                 <h1 id="loginTxt">Log In</h1>
//                 <input className = 'emailPass' type= 'text' name= 'email' placeholder="E-mail" onChange={handleChange}  />
//                 {
//                   errors.email && <h3>{errors.email}</h3>
//                 }
//                 <input className = 'emailPass' type= 'password' name= 'password' placeholder="Password" onChange={handleChange}  />
//                 {
//                   errors.password && <h3>{errors.password}</h3>
//                 }
//                 <input className = 'emailPass' type= 'text' name= 'username' placeholder="Username" onChange={handleChange}  />
//                 {
//                   errors.username && <h3>{errors.username}</h3>
//                 }
//                 <input type= 'submit' value= 'Submit' className="submit" />
//             </form>
//         </div>
//     );
//     console.log(values)
    
// }
// export default App;

export function AppRouter() {
  return (
    <div>
      {/* <h1>Bookkeeper!</h1>
      <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
      >
        <Link to= '/invoices'>Invoices</Link> |{' '}
        <Link to= '/expenses'>Expenses</Link>
        </nav> */}
        {/* <Outlet /> */}
    </div>
  );
}