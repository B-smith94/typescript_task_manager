import Task from "../Tasks";

type TasksActions =
    | { type: 'ADD_TASK'; payload: Task }
    | { type: 'EDIT_TASK'; payload: Task }
    | { type: 'COMPLETE_TASK'; payload: number };

export default TasksActions;