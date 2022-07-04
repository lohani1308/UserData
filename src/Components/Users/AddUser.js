import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser=(props)=> {
    //To Handle Submited data
    const [user,setUser]=useState('');
    const [age,setAge]=useState();
    const [error,setError]=useState();

    const userNameHandler=(event)=>{
        setUser(event.target.value);
        //console.log(user);
    }

    const AgeHandler=(event)=>{
        setAge(event.target.value);
       // console.log(age);
    }
    
    const addUserHanler=(event)=>{
        event.preventDefault();
        
        //Validation
        if(user.trim().length===0 || age.trim().length===0)
        {
            setError({
                title:'Invalid input',
                message:'Please Enter a valid name and age (non-empty values)'
            });

            return;
        }
        if(age<1){
            setError({
                title:'Invalid Age',
                message:'Please Enter a age greater than 0'
            });
            return;
        }

        const data={
            username:user,
            age:age,
            id:Math.random().toString()
        }

        props.addUsers(data);//passing data to parent 
        setUser('');
        setAge('');
    }

    const errorHandler=()=>{
        setError(null);
    }

  return (
    <div>
        
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
                value={user}
                onChange={userNameHandler}
            />
            <label htmlFor='userage'>Age(Years)</label>
            <input 
                type="number" 
                id="userage" 
                value={age}
                onChange={AgeHandler}
            />
            <Button type="submit">Add User</Button>
            </div>
        </form>
        </Card>
    </div>
  )
}

export default AddUser