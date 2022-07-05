import React, { useState,useRef } from 'react'
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser=(props)=> {
    //To Handle Submited data
    const nameInputRef=useRef();
    const ageInputRef=useRef();
    const [error,setError]=useState();

   
    
    const addUserHanler=(event)=>{
        event.preventDefault();
        const enteredUsername=nameInputRef.current.value;
        const enteredUserAge=ageInputRef.current.value;

        //Validation
        if(enteredUsername.trim().length===0 || enteredUserAge.trim().length===0)
        {
            setError({
                title:'Invalid input',
                message:'Please Enter a valid name and age (non-empty values)'
            });

            return;
        }
        if(enteredUserAge<1){
            setError({
                title:'Invalid Age',
                message:'Please Enter a age greater than 0'
            });
            return;
        }

        const data={
            username:enteredUsername,
            age:enteredUserAge,
            id:Math.random().toString()
        }

        props.addUsers(data);//passing data to parent 
        nameInputRef.current.value='';
        ageInputRef.current.value='';
        
    }

    const errorHandler=()=>{
        setError(null);
    }

  return (
    <Wrapper>

    {error && 
    (<ErrorModal 
        title={error.title} 
        message={error.message} 
        onConfirm={errorHandler}
    />)}

    <Card className={classes.input}>
        <form onSubmit={addUserHanler}>
            <div className='input'>
            <label htmlFor='username'>UserName</label>
            <input type="text" 
                id="username" 
                ref={nameInputRef}
            />
            <label htmlFor='userage'>Age(Years)</label>
            <input 
                type="number" 
                id="userage" 
                ref={ageInputRef}
            />
            <Button type="submit">Add User</Button>
            </div>
        </form>
        </Card>
    </Wrapper>
  )
}

export default AddUser