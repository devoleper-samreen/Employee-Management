import React from 'react'
import { useForm } from 'react-hook-form'
import { setTask, getTasks } from "../../utils/adminLocalStorage"
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import useTaskStore from "../../store/taskStore"

function CreateTaskForm() {
    const navigate = useNavigate()
    const { addTask } = useTaskStore()
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        console.log("data: ", data);
        const tasks = getTasks() || []

        const newTask = {
            id: Date.now(),
            ...data
        }

        setTask([...tasks, newTask]);
        addTask([...tasks, newTask]);

        reset()
        toast.success("Task created successfully!")
        navigate('/dashboard/admin')

    }

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-[600px] mt-10 md:mt-0 py-4 md:py-2 flex flex-col items-center gap-3 ">
                <h1 className="text-4xl font-bold mt-6">Create Task</h1>

                <div className="flex flex-col w-full">
                    <label htmlFor="title" className="text-xl font-bold mb-6 mt-8 pl-3 md:pl-0.5">
                        Task Title
                    </label>
                    <input id="title" type="text" placeholder="Enter Task title"
                        className="w-full px-4
                         py-4 bg-gray-700 rounded"
                        {...register("title", {
                            required: true
                        })}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="description" className="text-xl font-bold mb-6 mt-8 pl-3 md:pl-0.5">
                        Task Description
                    </label>
                    <textarea id="description" type="text" placeholder="Enter Task description"
                        rows='5'
                        className="w-full px-4
                         py-4 bg-gray-700 rounded"
                        {...register("description", {
                            required: true
                        })}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="date" className="text-xl font-bold mb-6 mt-8 pl-3 md:pl-0.5">
                        Assign Date
                    </label>
                    <input id="date" type="date"
                        className="w-full px-4
                         py-4 bg-gray-700 rounded"
                        {...register("date", {
                            required: true
                        })}
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
                        {...register("assignTo", {
                            required: true
                        })}
                    />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="assign-to" className="text-xl font-bold mb-6 mt-8 pl-3 md:pl-0.5">
                        Priority
                    </label>
                    <select
                        className="w-full px-4
                         py-4 bg-gray-700 rounded focus:outline-2 focus:outline-blue-700 focus:outline-none"
                        {...register("priority", {
                            required: true
                        })}

                    >
                        <option value="">Priority</option>
                        <option className="bg-[#272727] text-white" value="High">High</option>
                        <option className="bg-[#272727] text-white" value="Medium">Meduim</option>
                        <option className="bg-[#272727] text-white" value="Low">Low</option>
                    </select>
                </div>

                <button type="submit" className="bg-amber-700 px-4 py-3 mt-8 mb-3 w-full cursor-pointer">Create Task</button>


            </form>
        </div>
    )
}

export default CreateTaskForm