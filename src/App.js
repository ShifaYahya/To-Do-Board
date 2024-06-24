import Input from "./components/Input";
import Board from "./components/Board";
import { useState } from "react";

function App() {
  const [taskList,setTaskList] = useState([])
  return (
    <>
    <h1 className=" text-center mx-auto my-6 font-bold text-2xl">To-Do Board📝</h1>
    <Input taskList={taskList} setTaskList={setTaskList}/>
    <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12 mt-8">
      {taskList.map((task, index)=>(
        <Board key={index} task={task} index={index} taskList={taskList} setTaskList={setTaskList}/>
      )

      )}
    </div>
    </>
  );
}

export default App;
