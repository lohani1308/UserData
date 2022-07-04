import { useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
//import Display from './Components/Users/Display';
import UserList from './Components/Users/UserList';

const App=(props)=> {

  const data=[

    {id:'e1',username:'Abhishek',age:24},
    {id:'e2',username:'Ayush',age:17},
    {id:'e3',username:'Preeti',age:48},
    {id:'e4',username:'Darshan',age:52},
    {id:'e5',username:'Akash',age:17}

  ]

  const [udata,SetUdata]=useState(data);//to store data comming from form
  
  //lifting state Up
  const addUsers=(parentdata)=>{
      //console.log(parentdata);
      SetUdata((prevData)=>{return ([parentdata,...prevData])})
      console.log(udata);
  }

  return (
   <div className="App">
     <AddUser addUsers={addUsers}/> 
     <UserList users={udata}/>
    </div>
  );
}

export default App;
