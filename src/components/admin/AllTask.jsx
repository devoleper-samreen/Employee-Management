import React from 'react'
import { Link } from 'react-router-dom'
import useTaskStore from "../../store/taskStore"

function AllTask() {
    const { tasks } = useTaskStore()

    console.log(tasks);

    return (
        <div className='w-full flex flex-col md:flex-row my-16 p-3 items-center justify-start gap-5 flex-wrap'>
            <Link to={'/create-task'} className='w-full md:w-[320px]'>
                <div className='w-full md:w-[320px] bg-red-800 md:h-28 rounded-lg p-4 flex items-center justify-center cursor-pointer'>

                    <button className='text-2xl font-bold cursor-pointer'>
                        Create Task
                    </button>

                </div>
            </Link>

            {
                tasks?.map((task, i) => {
                    return <div key={i} className='w-full md:w-[320px] bg-blue-700 rounded-lg p-4'>
                        <div className='flex items-center justify-between'>
                            <p className='text-xl font-bold'>{task?.assignTo}</p>
                            <p className='bg-amber-900 px-3 py-1 rounded-lg'>status</p>
                        </div>
                        <p className='mt-6 text-center'>{task?.title}</p>

                    </div>
                })
            }
        </div>

    )
}

export default AllTask