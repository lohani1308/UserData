import React from 'react'
import Card from '../UI/Card';

function Display(props) {
  return (
    <Card>
        {props.user.map((data)=>(
            <div>
                <h1>{data.username}</h1>
                <h1>{data.age}</h1>
            </div>
        ))}
    </Card>
  )
}

export default Display;