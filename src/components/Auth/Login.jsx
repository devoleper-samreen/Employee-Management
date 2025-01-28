import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuthData } from "../../utils/localStorage";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        const AllEmplyee = getAuthData();

        const employee = AllEmplyee.find(employee => employee.email === email && employee.password === password);

        if (employee && employee.role == 'employee') {

            navigate("/employee-dashboard")
        } else if (employee && employee.role == 'admin') {
            navigate("/admin-dashboard")
        }
        else {
            console.log("user not found");
        }

        setEmail('');
        setPassword('');
    }

    return (
        <form onSubmit={submitHandler} className="flex items-center justify-center h-screen w-full px-5 sm:px-0 text-white">
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
                        <Link

                            className="text-xs hover:text-gray-900 text-end w-full mt-2"
                        >
                            Forget Password?
                        </Link>
                    </div>
                    <div className="mt-8">
                        <button type='submit' className="bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600 cursor-pointer">
                            Login
                        </button>
                    </div>
                    <Link

                        className=" flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
                    >
                        <div className="flex px-5 justify-center w-full py-3">
                            <div className="min-w-[30px]">
                                <svg className="h-6 w-6" viewBox="0 0 40 40">
                                    <path
                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                        fill="#FFC107"
                                    />
                                    <path
                                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                        fill="#FF3D00"
                                    />
                                    <path
                                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                        fill="#4CAF50"
                                    />
                                    <path
                                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                        fill="#1976D2"
                                    />
                                </svg>
                            </div>
                            <div className="flex w-full justify-center">
                                <h1 className="whitespace-nowrap text-blue-200 font-bold" style={{ color: "#6B7280" }}>
                                    Sign in with Google
                                </h1>
                            </div>
                        </div>
                    </Link>
                    <div className="mt-4 flex items-center w-full text-center">
                        <Link
                            className="text-xs text-gray-500 capitalize text-center w-full"
                        >
                            Don&apos;t have any account yet?
                            <span className="text-blue-700"> Sign Up</span>
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default Login;
