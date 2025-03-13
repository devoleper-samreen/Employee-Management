import React from 'react'
import useAuthStore from "../store/authStore"
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
    const user = useAuthStore((state) => state.user);

    return user ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute