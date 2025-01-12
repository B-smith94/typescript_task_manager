import TasksActions from "./TasksActions";
import {TasksContextValue} from "../TaskContext";

const tasksReducer = (state: TasksContextValue, action: TasksActions): TasksContextValue => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, tasks: [ ...state.tasks, action.payload ] };
        case 'EDIT_TASK': 
            return { ...state, tasks: state.tasks.map(task => 
                task.id === action.payload.id ? { ...task, ...action.payload } : task
            ) }
        case 'COMPLETE_TASK':
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
    }
}

export default tasksReducer;