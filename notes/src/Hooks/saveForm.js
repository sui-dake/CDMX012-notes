import React, {useState} from "react"
import {omit} from 'lodash'

const useSave = (callback) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    
    const validate = (e, name, value) =>{
        switch (name){
            case 'Title':
                if(value.length === 0) {

                setErrors({
                    ...errors,
                    Title: 'Title must not be empty'
                })
            } else {
                let newObj = omit(errors, 'Title');
                setErrors(newObj);
            }
            break;

            case 'Content':
                if(value.length === 0){
                    setErrors({
                        ...errors,
                        Content: 'Content must not be empty'
                    })
                }else{
                    let newObj = omit(errors, 'Content');
                    setErrors(newObj);
                }
            break;

            default:
                break;
        } 
    }
    const handleChange = (e) => {
        e.persist();
        
        let name = e.target.name;
        let val = e.target.value;

        //validate
        setValues({
            ...values,
            [name]:val,
        })
    }

    const handleSubmit = (e) =>{
        if(e) e.preventDefault();
        let name = e.target.name;
        let val = e.target.value;
        validate(e, name, val)
        if(Object.keys(errors).length === 0 && Object.keys(values).length !==0 ){
            callback();
        } else{
            console.log('hay un error!!!!')
        }
        console.log(values.Title, values.Content)
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}
export default useSave