import React,{useState} from 'react';
import {useDispatch}from 'react-redux';
//importation d action addTask
import { addTask } from "../../JS/Actions/listTask";


const AddTask = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    
const handelChange=()=>{
    if(text){
        //Math.random ba3edeha 7ott () 
    dispatch(addTask({id:Math.random(),text:text,isDone:false}));
setText("");
}
    else { alert("empty text")}
}
    return (
        <div>
            <div className="row m-2">
            
            <input className ="col form-control "
            onChange={(e)=>setText(e.target.value) }value={text}/>
            <button className="  btn btn-primary mx-2" 
            onClick={handelChange}>
                Add
            </button>
          
            </div>
        </div>
    )
}

export default AddTask
