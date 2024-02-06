import React, { useState } from 'react'
import './Button.css'

const MyButton = ({btnClassName,btnLabel})=> {
    return(
        <button className={`btn ${btnClassName}`}>{btnLabel}</button>
    )
}
const Button = () => {
    const [count,setCount] = useState(0);
  return (
    <div>
        <p>My Count {count}</p>
        {/* <button className='btn increase'>Increment</button>
        <button className='btn decrease'>Decrement</button> */}
        <MyButton btnClassName="increase" btnLabel="Increment"/>
        <MyButton btnClassName="decrease" btnLabel="Decrement"/>
    </div>
  )
}

export default Button