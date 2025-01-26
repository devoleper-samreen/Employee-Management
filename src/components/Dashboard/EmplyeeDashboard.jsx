import React from 'react'

function EmplyeeDashboard() {
    return (
        <div className='w-full'>
            <div className='flex items-center gap-[210px] md:gap-[80%] h-20 px-3'>
                <div className='pl-4'>Hello,  <br /> <span className='text-amber-400 text-3xl bold'>User</span>
                </div>
                <div>
                    <button className='bg-blue-500 px-8 py-2 text-center rounded'>logout</button>
                </div>
            </div>
            <div className='flex items-center justify-center flex-wrap gap-3 md:gap-8 mt-16'>
                <div className='w-[44%] h-32 md:h-48 rounded bg-blue-500'>1</div>
                <div className='w-[44%] bg-green-500 h-32 md:h-48 rounded'>2</div>
                <div className='w-[44%] bg-yellow-500 h-32 md:h-48 rounded'>33</div>
                <div className='w-[44%] bg-orange-700 h-32 md:h-48 rounded'>44</div>
            </div>
            <div className='flex items-center justify-center flex-col md:flex-row flex-wrap w-full gap-6 mt-14 md:mt-20 mb-20'>
                <div className='w-[95%] md:w-[30%] bg-blue-800 h-32 md:h-44 rounded mx-2.5'>11</div>
                <div className='w-[95%] md:w-[30%] bg-blue-800 h-32 md:h-44  rounded'>99</div>
                <div className='w-[95%] md:w-[30%] bg-blue-800 h-32 md:h-44  rounded'>88</div>

            </div>
        </div>
    )
}

export default EmplyeeDashboard