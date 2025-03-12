import React from 'react'
import useAuthStore from "../../store/authStore"
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    const { user, logout } = useAuthStore()

    const onLogout = () => {
        logout()
        localStorage.removeItem("Auth-storage")
        navigate('/')
    }

    return (
        <div className='flex items-center justify-between h-20 px-4'>
            <div className='text-xl'>Hello <br /><span className='text-amber-500 text-3xl font-bold'>{user?.name || "User"} 👋</span>
            </div>
            <div>
                <button onClick={onLogout} className='bg-blue-500 px-8 py-3 text-center rounded font-bold text-lg cursor-pointer'>logout</button>
            </div>
        </div>
    )
}

export default Header