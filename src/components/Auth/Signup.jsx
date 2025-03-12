import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    return (
        <form className="flex items-center justify-center h-screen w-full px-5 sm:px-0 text-white">
            <div className="flex bg-[#272727] rounded-lg shadow-lg overflow-hidden max-w-sm lg:max-w-4xl w-full">
                <div className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
                    style={{
                        backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
                    }}>
                </div>
                <div className="w-full  py-4 px-8 lg:w-1/2">
                    <p className="text-2xl text-white text-center font-extrabold">Create an Account</p>
                    <div className="mt-8">
                        <input
                            className="border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="text"
                            placeholder="Enter full name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mt-6">
                        <input
                            className="border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="email"
                            placeholder="Enter email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mt-6">
                        <input
                            className="border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="password"
                            placeholder="Enter password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-6">
                        <select
                            className="border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700 focus:outline-none bg-[#272727]"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="">Select Role</option>
                            <option className="bg-[#272727] text-white" value="employee">Employee</option>
                            <option className="bg-[#272727] text-white" value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="mt-8">
                        <button type='submit' className="bg-blue-700 text-white font-bold py-3 my-4 px-4 w-full rounded hover:bg-blue-600 cursor-pointer">
                            Sign Up
                        </button>
                    </div>
                    <div className="mt-4 flex items-center w-full text-center">
                        <Link to='/'
                            className="text-xs text-gray-200 capitalize text-center w-full">
                            Already have an account? {" "} <span className="text-blue-700 text-[14px]">Login</span>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default Signup;
