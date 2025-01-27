import React from 'react'

function Header() {
    return (
        <div className='flex items-center justify-between h-20 px-4'>
            <div className='text-xl'>Hello <br /><span className='text-amber-500 text-3xl font-bold'>Sarthak 👋</span>
            </div>
            <div>
                <button className='bg-blue-500 px-8 py-3 text-center rounded font-bold text-lg'>logout</button>
            </div>
        </div>
    )
}

export default Header