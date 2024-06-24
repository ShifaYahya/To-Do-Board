import React from 'react'

const Board = ({index, task, taskList, setTaskList}) => {
  const handleDelete= (e)=>{
    const [...newTasks] = taskList;   //cooppy of tasklist
    newTasks.splice(index, 1) ;  //index of the one we're on and delete it
    setTaskList(newTasks);      //now setTaskList after removing

  }
  return (
    <div className='flex flex-col gap-2 justify-center items-center border rounded-lg text-lg max-w-md pt-3 pb-4 '>
    <p className='text-xl text-black'>
      {task}
    </p>
    <button className="bg-red-500 hover:opacity-80 rounded-lg py-1 px-2 text-white text-sm" onClick={handleDelete}>
      delete
    </button>
    </div>
   
  )
}

export default Board