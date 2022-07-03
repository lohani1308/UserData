import { useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
//import Display from './Components/Users/Display';
import UserList from './Components/Users/UserList';

const App=(props)=> {

  const data=[

    {username:'Abhishek',age:24},
    {username:'Ayush',age:17},
    {username:'Preeti',age:48},
    {username:'Darshan',age:52},
    {username:'Akash',age:17}

  ]

  const [udata,SetUdata]=useState(data);//to store data comming from form

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
