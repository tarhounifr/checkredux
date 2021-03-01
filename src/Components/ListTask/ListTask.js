import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task';

const ListTask = () => {
    const [vue, setvue] = useState("all")
   const listtask = useSelector((state) => state.task.listTask);   
    return (
        <div>
<button  className="btn btn-primary m-2" onClick={()=>setvue("all") }>All</button>
<button  className="btn btn-primary  m-2"onClick={()=>setvue("done") }>Done</button>
<button  className="btn btn-primary  m-2"onClick={()=>setvue("undone") }>Undone</button>



        {vue=="done"?listtask.filter(el=>el.isDone==true).map((el)=>(<Task task={el} key={el.id}/>)):vue=="undone"?listtask.filter(el=>el.isDone==false).map((el)=>(<Task task={el} key={el.id}/>)):listtask.map((el)=>(<Task task={el} key={el.id}/>))} 
  
          
        </div>
    )
}

export default ListTask

