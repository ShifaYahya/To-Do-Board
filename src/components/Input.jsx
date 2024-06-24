import React from 'react'
import { useState } from 'react'

const Input = ({taskList, setTaskList}) => {
    const [input, setInput] = useState("")
    const handleAddTask= (e)=> {
    e.preventDefault() //to prevent from refreshing each time we submit a form
    setTaskList([...taskList, input])
    setInput("") //set the input back to empty string

    }
  return (
   <form className='flex flex-row gap-3 items-center justify-center'>
    <input className='rounded-2xl border outline-none py-2 px-3 text-lg' type="text" placeholder='Add New Task' value={input} onChange = {(e)=> setInput(e.target.value)}>
    </input>
    <button className='bg-violet-500 rounded-2xl text-white text-lg hover:opacity-80 py-2 px-3' onClick={handleAddTask}>Add</button>
   </form>
  )
}

export default Input
