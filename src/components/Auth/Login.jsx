import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <form className="flex items-center justify-center h-screen w-full px-5 sm:px-0 text-white">
            <div className="flex bg-[#272727] rounded-lg shadow-lg overflow-hidden max-w-sm lg:max-w-4xl w-full">
                <div
                    className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
                    style={{
                        backgroundImage: `url(https://www.tailwindtap.com//assets/components/form/userlogin/login_tailwindtap.jpg)`,
                    }}
                >

                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <p className="text-xl text-white text-center text-extrabold">Welcome back!</p>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-sm font-bold mb-2">
                                Email Address
                            </label>
                        </div>
                        <input
                            className="border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="email"
                            placeholder="Enter Email here"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mt-4 flex flex-col justify-between">
                        <div className="flex justify-between">
                            <label className="text-bold text-sm font-bold mb-2">
                                Password
                            </label>
                        </div>
                        <input
                            className="border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                            type="password"
                            placeholder="Enter password here"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-8">
                        <button type='submit' className="bg-blue-700 text-white font-bold py-3 my-4 px-4 w-full rounded hover:bg-blue-600 cursor-pointer">
                            Login
                        </button>
                    </div>

                    <div className="mt-4 flex items-center w-full text-center">
                        <Link to='/signup'
                            className="text-xs text-gray-200 capitalize text-center w-full"
                        >
                            Don&apos;t have any account yet? {" "}
                            <span className="text-blue-700"> Sign Up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default Login;
