import React from 'react'
import{useDispatch}from 'react-redux'
import { deleteTask, doneTask } from '../../JS/Actions/listTask'
import Edit from '../Edit/Edit'

const Task = ({task}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className="row mx-5 align-items-center">
            <span className="col form-control m-2">{task.text} </span>
           <Edit task={task}/>
            <button  className="btn btn-danger m-2"
            onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
            <button className="btn btn-primary m-2"
            onClick={()=>dispatch(doneTask(task.id))}>
            {task.isDone?"undone":"done"}</button>
        </div>
        </div>
    )
}

export default Task
