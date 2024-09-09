export interface ITask {
    authorUid: string
    content: string
}

export interface IListTask {
    authorUid: string
    title: string
    tasks: Array<IListTaskItem>
}

export interface IListTaskItem {
    id: string
    content: string
}

export interface ITaskStore {
    tasks: any
    addTask: any
    removeTask: any
    updateTask: any
    taskCount: any
    isLoading: any
    getTasks: any
}