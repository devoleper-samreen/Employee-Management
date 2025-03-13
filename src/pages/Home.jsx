import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-transparent text-white p-4 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Employee Management</h1>
            <p className="text-lg text-gray-300 max-w-md">To explore and access the dashboard, you must log in.</p>

            <Link to='/login'>
                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold transition-all cursor-pointer">
                    Login
                </button>
            </Link>
        </div>
    );
}