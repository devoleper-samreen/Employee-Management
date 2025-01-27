import React from "react";
import Header from "../Header/Header"

const AdminDashboard = () => {

    return (
        <>
            <Header />

            <div className="w-full flex flex-col justify-center items-center">
                <form className="w-full md:w-[600px] h-screen mt-10 md:mt-0 py-4 md:py-2 flex flex-col items-center gap-3 ">
                    <h1 className="text-4xl font-bold mt-6">Create Task</h1>

                    <div className="flex flex-col w-full">
                        <label htmlFor="title" className="text-xl font-bold mb-6 mt-8 pl-3 md:pl-0.5">
                            Task Title
                        </label>
                        <input id="title" type="text" placeholder="Enter Task title"
                            className="w-full px-4
                         py-4 bg-gray-700 rounded" />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="description" className="text-xl font-bold mb-6 mt-8 pl-3 md:pl-0.5">
                            Task Description
                        </label>
                        <textarea id="description" type="text" placeholder="Enter Task title"
                            rows='5'
                            className="w-full px-4
                         py-4 bg-gray-700 rounded" />
                    </div>

                </form>
            </div>
        </>
    );
};
export default AdminDashboard;
