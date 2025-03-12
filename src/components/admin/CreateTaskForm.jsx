import React, { useState } from 'react'

function CreateTaskForm() {
    const [task, setTask] = useState({
        title: "",
        description: "",
        date: "",
        assignTo: "",
        category: ""
    });

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <form className="w-full md:w-[600px] mt-10 md:mt-0 py-4 md:py-2 flex flex-col items-center gap-3 ">
                <h1 className="text-4xl font-bold mt-6">Create Task</h1>

                <div className="flex flex-col w-full">
                    <label htmlFor="title" className="text-xl font-bold mb-6 mt-8 pl-3 md:pl-0.5">
                        Task Title
                    </label>
                    <input id="title" type="text" placeholder="Enter Task title"
                        className="w-full px-4
                         py-4 bg-gray-700 rounded"
                        value={task.title}
                        onChange={(e) => setTask(task.title == e.target.value)}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="description" className="text-xl font-bold mb-6 mt-8 pl-3 md:pl-0.5">
                        Task Description
                    </label>
                    <textarea id="description" type="text" placeholder="Enter Task title"
                        rows='5'
                        className="w-full px-4
                         py-4 bg-gray-700 rounded"
                        value={task.description}
                        onChange={(e) => setTask(task.description == e.target.value)}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="date" className="text-xl font-bold mb-6 mt-8 pl-3 md:pl-0.5">
                        Date
                    </label>
                    <input id="date" type="date"
                        className="w-full px-4
                         py-4 bg-gray-700 rounded"
                        value={task.date}
                        onChange={(e) => setTask(task.date == e.target.value)}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="assign-to" className="text-xl font-bold mb-6 mt-8 pl-3 md:pl-0.5">
                        Assign to
                    </label>
                    <input id="assign-to" type="text"
                        placeholder="Assign to"
                        className="w-full px-4
                         py-4 bg-gray-700 rounded"
                        value={task.assignTo}
                        onChange={(e) => setTask(task.assignTo == e.target.value)}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="category" className="text-xl font-bold mb-6 mt-8 pl-3 md:pl-0.5">
                        Category
                    </label>
                    <input id="category" type="text"
                        placeholder="Category"
                        className="w-full px-4
                         py-4 bg-gray-700 rounded"
                        value={task.category}
                        onChange={(e) => setTask(task.category == e.target.value)}

                    />
                </div>

                <button type="submit" className="bg-amber-700 px-4 py-3 mt-8 mb-3 w-full">Create Task</button>


            </form>
        </div>
    )
}

export default CreateTaskForm