import React from 'react'
import useTaskStore from "../../store/taskStore"
import useAuthStore from "../../store/authStore"
import { setTask } from '../../utils/employeeLocalStorage'
import useEmployeeTaskStore from '../../store/employeeTask'
import { useEffect } from 'react'

function TaskListCard() {
    const { user } = useAuthStore()
    const { tasks } = useTaskStore()
    const { addMyTask } = useEmployeeTaskStore()

    const myTask = tasks.filter((task) => user.name == task.assignTo)

    useEffect(() => {
        setTask(myTask) // Local Storage 
        addMyTask(myTask) // Store update 
    }, [myTask, addMyTask])


    return (
        <div id='task-list' className='flex items-center justify-start flex-col md:flex-row flex-nowrap w-full gap-6 mt-14 md:mt-18 mb-20 md:overflow-x-auto'>
            {
                myTask?.map((task, i) => {
                    return <div key={i} className='w-[95%] md:w-[400px] bg-blue-800 min-h-32 md:h-56 rounded-lg mx-2.5 flex-shrink-0 p-4'>
                        <div className='flex justify-between items-center'>
                            <button className='bg-amber-700 px-4 py-1 rounded-lg'>{task?.priority || "High"}</button>
                            <p>{task.date}</p>
                        </div>
                        <h1 className='text-2xl font-bold mt-6'>{task.title}</h1>
                        <p className='mt-4'>{task.description}</p>
                    </div>

                })
            }
        </div>
    )
}

export default TaskListCard