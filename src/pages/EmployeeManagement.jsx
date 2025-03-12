import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getEmployeeTask, updateEmployeeTask } from '../utils/authLocalStorage'

function EmployeeManagement() {
    const { taskId } = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
        const tasks = getEmployeeTask();
        const task = tasks.find(t => t.id === taskId);
        setTask(task);
    }, [taskId]);

    const handleAcceptTask = () => {
        // Logic to accept task
    };

    const handleCompleteTask = () => {
        // Logic to mark task as complete
    };

    if (!task) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
            <p className="mb-4">{task.description}</p>
            <div className="flex space-x-2">
                <button onClick={handleAcceptTask} className="bg-green-500 text-white px-4 py-2 rounded">Accept</button>
                <button onClick={handleCompleteTask} className="bg-gray-500 text-white px-4 py-2 rounded">Complete</button>
            </div>
        </div>
    );
}

export { EmployeeManagement };
