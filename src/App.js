import {Card,Form,InputGroup,FormControl} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Task from "./task";

function App(){
  const [task,setTask] = useState("");
  // const [all,setAll] = useState([]);
  const [activeTask,setActiveTask] = useState(["Do Excercise","Read a book","create task"]);
  const [completedTask,setCompletedTask] = useState([]);
  const [presentTasks,setPresentTask] = useState("all-task")
  
  const handleChange=(({target:{value}})=>{
    setTask(value);
  })
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(task.length < 5){
      alert('should contain minimum of 5 Characters')
    }else if(task.length > 20){
      alert('should be below 20 characters')
    }else{
      const tasks = task;
      const active = [...activeTask];
      active.push(tasks);
      setActiveTask(active);
      setTask("")
    }
  }
  const handleCheck=(({target:{value,checked}})=>{ 
    if(checked){
      const findIndex = activeTask.findIndex(ele => ele === value);
      console.log(findIndex)
      setActiveTask(activeTask.filter((task)=> task != value))
      const complete = [...completedTask];  
      complete.push(value);
      setCompletedTask(complete);
    }
    if(!checked){
      activeTask.push(value);
      setActiveTask(activeTask);
      setCompletedTask(completedTask.filter((task)=> task != value))
    }
  })
  return(
    <>
      <Card>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="task">
              <Form.Label>Create Task</Form.Label>
              <Form.Control type="text" placeholder="New Task..."
              value={task} onChange={handleChange} />
            </Form.Group>
        </Form>
        <ul>
          <li><a href="#" className="a" onClick={()=>{setPresentTask("all-task")}}>All</a></li>
          <li><a href="#" className="a" onClick={()=>{setPresentTask("active-task")}}>Active</a></li>
          <li><a href="#" className="a" onClick={()=>{setPresentTask("completed-task")}}>Completed</a></li>
        </ul>
        {presentTasks === "all-task" && <Task className="all" tasks={activeTask} func={handleCheck } />}
        {presentTasks === "all-task" && <Task className="all complete" tasks={completedTask} func={handleCheck } checked="checked"/>}
        {presentTasks === "active-task" && <Task className="active" tasks = {activeTask} func={handleCheck}/>}
        {presentTasks === "completed-task" && <Task className="complete" tasks = {completedTask} func={handleCheck} checked="checked"/>}
        <hr/>
        <div>{activeTask.length} tasks left</div>
      </Card>
    </>
  )
}
export default App;