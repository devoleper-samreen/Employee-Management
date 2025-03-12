import React from 'react'
import useAuthStore from "../../store/authStore"

function Header() {
    const { user } = useAuthStore()
    console.log("login user : ", user);


    return (
        <div className='flex items-center justify-between h-20 px-4'>
            <div className='text-xl'>Hello <br /><span className='text-amber-500 text-3xl font-bold'>{user?.name || "User"} 👋</span>
            </div>
            <div>
                <button className='bg-blue-500 px-8 py-3 text-center rounded font-bold text-lg cursor-pointer'>logout</button>
            </div>
        </div>
    )
}

export default Header