import React, { useState } from 'react'
import './ToDo.css'

const ToDo = () => {
    const [inputText, setInputText] = useState("");
    const [todoItems, setTodoItems] = useState([]);

    const inputHandler = (e)=>{
        setInputText(e.target.value)
    }

    const addHandler = ()=>{
        console.log("Added value "+ inputText)
        if(inputText !== ""){
            setTodoItems ([...todoItems,inputText])
            setInputText("")
        }
    }

    const editHandler =(clickedId)=>{
        console.log("Edit index "+clickedId)
        const oldItem = todoItems.filter((item,index)=>index === clickedId)
        const newText = window.prompt('Edit your text ',oldItem)
        if(newText){
            console.log("New Text" +newText)
            const updatedTodoItems= todoItems.map((item,index)=>
            index=== clickedId? newText: item)
            console.log("Updates to items "+updatedTodoItems)
            setTodoItems(updatedTodoItems)
        }
    }

    const deleteHandler = (deleteId)=>{
        let updatedTodoList = todoItems.filter((item,index)=> index !== deleteId)
        setTodoItems(updatedTodoList)
    }

  return (
    <div>
        <h1>ToDo List</h1>
        <div >
            <div className="addTask">
            <input type="text" placeholder="add item..." value={inputText} onChange={inputHandler}/>
            <input type="submit" value="Add" onClick={addHandler}/>
            </div>

            <div className="content">
                {
                    todoItems.map((item,index)=>
                    <div key={index} className='todo'>
                        <p>{item}</p> 
                        <button type='button' onClick={()=>deleteHandler(index)} >Delete</button> 
                        <button type='button' onClick={()=>editHandler(index)}>Edit</button>
                    </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default ToDo