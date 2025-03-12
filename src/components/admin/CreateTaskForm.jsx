import React from 'react'
import { useForm } from 'react-hook-form'

function CreateTaskForm() {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        console.log("data: ", data);


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
                        Date
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
                        {...register("assign-to", {
                            required: true
                        })}
                    />
                </div>

                <button type="submit" className="bg-amber-700 px-4 py-3 mt-8 mb-3 w-full cursor-pointer">Create Task</button>


            </form>
        </div>
    )
}

export default CreateTaskForm