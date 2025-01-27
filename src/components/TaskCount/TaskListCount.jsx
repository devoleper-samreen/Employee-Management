import React from 'react'

function TaskListCount() {
    return (
        <div className='flex items-center justify-start flex-wrap gap-6 md:gap-6 mt-16 px-2'>
            <div className='w-[46%] md:w-[31%] h-32 md:h-32 rounded-lg bg-blue-500 px-8 flex flex-col justify-center'>
                <h1 className='text-3xl font-bold'>0</h1>
                <h2 className='text-2xl font-bold'>new task</h2>
            </div>
            <div className='w-[46%] md:w-[31%] h-32 md:h-32 rounded-lg bg-yellow-500'>1</div>
            <div className='w-[46%] md:w-[31%] h-32 md:h-32 rounded-lg bg-red-700'>1</div>
        </div>
    )
}

export default TaskListCount