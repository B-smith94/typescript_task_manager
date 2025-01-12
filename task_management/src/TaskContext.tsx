import Task from "./Tasks";
import { createContext, useContext } from "react";
import TasksActions from "./components/TasksActions";

export interface TasksContextValue {
    tasks: Task[];
    dispatch: React.Dispatch<TasksActions>
}

const TasksContext = createContext<TasksContextValue | undefined>(undefined);

export const useTasksContext = () => {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error('Unable to retrieve tasks')
    }
    return context;
}

export default TasksContext;