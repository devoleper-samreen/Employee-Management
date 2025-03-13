import React, { useState, useEffect } from "react";
import useTaskStore from "../../store/taskStore";
import useAuthStore from "../../store/authStore";
import useEmployeeTaskStore from "../../store/employeeTask";

function TaskDashboard() {
    const { user } = useAuthStore();
    const { tasks } = useTaskStore();
    const { addMyTask } = useEmployeeTaskStore();

    const [acceptedTasks, setAcceptedTasks] = useState(() => {
        return JSON.parse(localStorage.getItem("acceptedTasks")) || {};
    });
    const [myTask, setMyTask] = useState([]);

    useEffect(() => {
        const assignedTasks = tasks.filter((task) => user?.name === task.assignTo);
        setMyTask(assignedTasks);
        localStorage.setItem("Task", JSON.stringify(assignedTasks));
        addMyTask(assignedTasks);
    }, [tasks, user, addMyTask]);

    const handleOnAccept = (id) => {
        console.log("Accepted Task:", id);
        const updatedAcceptedTasks = { ...acceptedTasks, [id]: true };
        setAcceptedTasks(updatedAcceptedTasks);
        localStorage.setItem("acceptedTasks", JSON.stringify(updatedAcceptedTasks));
    };

    const handleOnComplete = (id) => {
        console.log("Completed Task:", id);
        const updatedAcceptedTasks = { ...acceptedTasks };
        delete updatedAcceptedTasks[id];
        setAcceptedTasks(updatedAcceptedTasks);
        localStorage.setItem("acceptedTasks", JSON.stringify(updatedAcceptedTasks));

        const updatedTasks = myTask.filter((task) => task.id !== id);
        setMyTask(updatedTasks);
        localStorage.setItem("Task", JSON.stringify(updatedTasks));
    };

    const pendingTasks = JSON.parse(localStorage.getItem("acceptedTasks")) || {};
    const pendingTaskCount = Object.keys(pendingTasks).length;
    const newTaskCount = myTask.length;

    return (
        <div className="p-6 mt-4">
            {/* Task Count Section */}
            <div className="flex flex-wrap gap-6 justify-center">
                <div className="w-[300px] md:w-[350px] h-32 bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center">
                    <h1 className="text-4xl font-bold">{newTaskCount}</h1>
                    <h2 className="text-xl">New Tasks</h2>
                </div>
                <div className="w-[300px] md:w-[350px] h-32 bg-yellow-500 text-white p-6 rounded-lg shadow-lg text-center">
                    <h1 className="text-4xl font-bold">{pendingTaskCount}</h1>
                    <h2 className="text-xl">Pending Tasks</h2>
                </div>
            </div>

            {/* Task List Section */}
            <div className="flex flex-wrap gap-6 justify-center mt-8">
                {myTask.map((task, i) => (
                    <div key={i} className="w-[350px] bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition">
                        <div className="flex justify-between items-center mb-4">
                            <button className="bg-red-500 px-4 py-1 rounded-lg text-white font-semibold">
                                {task.priority || "High"}
                            </button>
                            <p className="text-gray-300">{task.date}</p>
                        </div>
                        <h1 className="text-2xl font-bold mb-2">{task.title}</h1>
                        <p className="text-gray-300 mb-4">{task.description}</p>

                        {!acceptedTasks[task.id] ? (
                            <button
                                className="bg-green-500 w-full py-2 rounded-lg font-semibold"
                                onClick={() => handleOnAccept(task.id)}
                            >
                                Accept Task
                            </button>
                        ) : (
                            <button
                                className="bg-blue-500 w-full py-2 rounded-lg font-semibold"
                                onClick={() => handleOnComplete(task.id)}
                            >
                                Mark as Completed
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskDashboard;
