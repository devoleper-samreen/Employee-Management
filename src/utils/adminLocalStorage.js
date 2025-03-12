export const setCreateTask = (task) => {
    localStorage.setItem("task", JSON.stringify(task))
}

export const getAdminTask = () => {
    const data = JSON.parse(localStorage.getItem("task"))
    console.log(data);
    return data;
}