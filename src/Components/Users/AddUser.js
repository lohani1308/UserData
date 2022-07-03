import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css'

const AddUser=(props)=> {
    //To Handle Submited data
    const [user,setUser]=useState('');
    const [age,setAge]=useState();

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
        if(user.trim().length===0 || age.trim().length===0)return;
        if(age<1)return;

        const data={
            username:user,
            age:age
        }

        props.addUsers(data);//passing data to parent 
        setUser('');
        setAge('');
    }

  return (
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
  )
}

export default AddUser