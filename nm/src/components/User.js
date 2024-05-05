import React, { useEffect } from 'react';
import { useState } from 'react';
const User = (props) => {
  const [count, setCount]=useState(0);
  const [count2]=useState(1);

  useEffect(()=>{
    //API calls 
  }, []);

  return (
    <div className="user-card m-4 p-4 bg-grey-50 rounded-lg">
      <h1>Count={count}</h1>
      <h1>count2={count2}</h1>
      <h2>Name: {props.name }</h2>
      <h3>Location: Dehradum</h3>
      <h4>Contact: @akshaynarch7</h4>
    </div>
  )
}

export default User;
  