export const setTask = (taskData) => {
    return localStorage.setItem("myTask", JSON.stringify(taskData))
}

export const getTasks = () => {
    return JSON.parse(localStorage.getItem("myTask")) || []
}

export const removeTask = () => {
    return localStorage.removeItem("myTask")
}
