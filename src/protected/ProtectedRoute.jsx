import React from 'react'
import useAuthStore from "../store/authStore"
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
    const { user } = useAuthStore()

    if (!user) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute