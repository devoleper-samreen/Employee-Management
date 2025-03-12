export const setTask = (taskData) => {
    return localStorage.setItem("Task", JSON.stringify(taskData))
}

export const getTasks = () => {
    return JSON.parse(localStorage.getItem("Task")) || []
}

export const removeTask = () => {
    return localStorage.removeItem("Task")
}