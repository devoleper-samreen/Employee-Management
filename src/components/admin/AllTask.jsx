import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTaskStore from '../../store/taskStore';

function AllTask() {
    const { tasks, refreshTasks } = useTaskStore();

    useEffect(() => {
        refreshTasks();
    }, []);

    const getPriorityColor = (priority) => {
        switch (priority) {
            case "High":
                return "bg-red-600 text-white";
            case "Medium":
                return "bg-yellow-500 text-black";
            case "Low":
                return "bg-green-600 text-white";
            default:
                return "bg-gray-500 text-white";
        }
    };


    return (
        <div className="w-full flex flex-col md:flex-row my-16 p-3 items-center justify-start gap-5 flex-wrap">

            {/* Create Task Button */}
            <Link to="/create-task" className="w-full md:w-[320px]">
                <div className="w-full bg-red-600 hover:bg-red-700 md:h-28 rounded-lg p-4 flex items-center justify-center cursor-pointer shadow-lg transition-all">
                    <button className="text-white text-2xl font-bold">Create Task</button>
                </div>
            </Link>

            {/* No Task Found Message */}
            {tasks?.length === 0 && (
                <p className="text-gray-500 text-xl font-semibold">No Tasks Found</p>
            )}

            {/* Task Cards */}
            {tasks?.map((task, i) => (
                <div key={i} className="w-full md:w-[320px] bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-4 shadow-md transition-all">
                    <div className='flex items-center justify-between'>
                        <p className='text-xl font-bold'>{task?.assignTo}</p>
                        <p className={`px-3 py-1 rounded-lg font-bold ${getPriorityColor(task?.priority)}`}>
                            {task?.priority}
                        </p>
                    </div>
                    <p className="mt-6 text-center text-lg">{task?.title}</p>
                </div>
            ))}
        </div>
    );
}

export default AllTask;
