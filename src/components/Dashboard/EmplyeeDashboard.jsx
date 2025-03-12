import React from 'react'
import Header from '../Header/Header'
import TaskListCount from '../employee/TaskListCount'
import TaskListCard from '../employee/TaskListCard'

function EmplyeeDashboard() {
    return (
        <div className='w-full'>
            <Header />
            <TaskListCount />
            <TaskListCard />

        </div>
    )
}

export default EmplyeeDashboard