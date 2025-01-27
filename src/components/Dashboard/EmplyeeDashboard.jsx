import React from 'react'
import Header from '../Header/Header'
import TaskListCount from '../TaskCount/TaskListCount'
import TaskListCard from '../TaskListCard/TaskListCard'

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