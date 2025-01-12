interface Task {
    id: number;
    name: string | null;
    taskEnd: number | null;
    complete: boolean;
}

export default Task;