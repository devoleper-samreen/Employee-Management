import React from 'react'

function TaskListCard() {
    return (
        <div id='task-list' className='flex items-center justify-start flex-col md:flex-row flex-nowrap w-full gap-6 mt-14 md:mt-18 mb-20 md:overflow-x-auto'>
            <div className='w-[95%] md:w-[400px] bg-blue-800 min-h-32 md:h-56 rounded-lg mx-2.5 flex-shrink-0 p-4'>
                <div className='flex justify-between items-center'>
                    <button className='bg-amber-700 px-4 py-1 rounded-lg'>High</button>
                    <p>26 jan 2025</p>
                </div>
                <h1 className='text-2xl font-bold mt-6'>Do this work</h1>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti optio voluptatibus veritatis nihil velit itaque expedita, natus culpa obcaecati corporis.</p>
            </div>
            <div className='w-[95%] md:w-[400px] bg-blue-800 h-32 md:h-56 rounded-lg mx-2.5 flex-shrink-0'>11</div>
            <div className='w-[95%] md:w-[400px] bg-blue-800 h-32 md:h-56 rounded-lg mx-2.5 flex-shrink-0'>11</div>
            <div className='w-[95%] md:w-[400px] bg-blue-800 h-32 md:h-56 rounded-lg mx-2.5 flex-shrink-0'>11</div>
            <div className='w-[95%] md:w-[400px] bg-blue-800 h-32 md:h-56 rounded-lg mx-2.5 flex-shrink-0'>11</div>

        </div>
    )
}

export default TaskListCard