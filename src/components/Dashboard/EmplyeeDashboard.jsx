import React from 'react'
import Header from '../Header/Header'
import TaskDashboard from '../employee/TaskListCard'

function EmplyeeDashboard() {
    return (
        <div className='w-full'>
            <Header />
            <TaskDashboard />
        </div>
    )
}

export default EmplyeeDashboard