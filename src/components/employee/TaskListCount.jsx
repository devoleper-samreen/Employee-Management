import React from 'react'
import useEmployeeTaskStore from "../../store/employeeTask"

function TaskListCount() {
    const { myTasks } = useEmployeeTaskStore()
    const count = myTasks.length || 0

    return (
        <div className='flex items-center justify-start flex-wrap gap-6 md:gap-6 mt-16 px-2'>
            <div className='w-[46%] md:w-[31%] h-32 md:h-32 rounded-lg bg-blue-500 px-8 flex flex-col justify-center'>
                <h1 className='text-3xl font-bold'>{count}</h1>
                <h2 className='text-2xl font-bold'>new task</h2>
            </div>
            <div className='w-[46%] md:w-[31%] h-32 md:h-32 rounded-lg bg-yellow-500'>Pending task</div>
            <div className='w-[46%] md:w-[31%] h-32 md:h-32 rounded-lg bg-red-700'>Completed task</div>
        </div>
    )
}

export default TaskListCount