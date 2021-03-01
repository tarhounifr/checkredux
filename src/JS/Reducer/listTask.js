
import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionsTypes/listTask";



// initial state
const initialState={
     listTask :[],
};



//pure function 
const TaskReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case ADD_TASK:
            
            return{...state,listTask:[...state.listTask,payload]};
    case DELETE_TASK:
        return{...state,listTask:state.listTask.filter(el=>el.id!==payload)}
        case DONE_TASK:
            return {...state,listTask:state.listTask.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)}
            case EDIT_TASK:
                return {...state,listTask:state.listTask.map((el)=>el.id===payload.id?{...el,text:payload.nawTask}:el )}
        default:
            return state;
    }
};
export default TaskReducer;