import React, {useState} from "react"
import {omit} from 'lodash'
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "./authContext";
// import { login } from "../firebaseApp";

const useForm = (callback) => {
    //const { login } = useAuth();
    //Form values
    const [values, setValues] = useState({});
    //Errors 
    const [errors, setErrors] = useState({});
    


    const validate = (event, name, value) => {
        //A function to validate each input values
    
        switch (name) {
            case 'username':
                if (value.length <= 4) {
                    // we will set the error state
    
                    setErrors({
                        ...errors,
                        username: 'Username atleast have 5 letters'
                    })
                } else {
    // set the error state empty or remove the error for username input
    
    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "username");
                    setErrors(newObj);
    
                }
                break;

            case 'email':
                if(
                    !new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        email:'Enter a valid email address'
                    })
                }else{
                    let newObj = omit(errors, "email");
                    setErrors(newObj);
                }
                break;

            case 'password':
                if(
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        password: 'Password should contains atleast 8 characters and containing uppercase, lowercase and numbers'
                    })
                }else{
                    let newObj = omit(errors, 'password');
                    setErrors(newObj);
                }
            break;
    
            default:
                break;
        }
    }
    //Handling form inputs
    const handleChange = (event) => {
        //Stopping defgault events
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);

        //Setting values in state
        setValues({
            ...values,
            [name]:val,
        })
    }
    const handleSubmit =  (event) => {
        if(event) event.preventDefault();
        // try {
        //     await login(values.email, values.password);
        //     navigate('/notes')
        // } catch(error){
        //     setErrors(error.message);

        // }
        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
            callback();
            
        }else{
            alert("There is an Error!");
        }
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}
    
export default useForm