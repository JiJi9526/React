import React, { useEffect, useState } from 'react'

const Count = () => {
    const [myCount, setMyCount]=useState(0)
    const [isSubmit, setIsSubmit] =useState(false)
    
    useEffect(()=>{
        console.log("Render in useEffect")
        setMyCount(myCount+1)
    },[isSubmit])

    const submitHandler = ()=>{
        setIsSubmit(!isSubmit)
    }

  return (
    <div>My Count{myCount}
        <button type='button' onClick={submitHandler}>Increase</button>
    </div>
  )
}

export default Count