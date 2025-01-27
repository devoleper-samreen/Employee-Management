import React from 'react'
import Header from '../Header/Header'
import TaskListCount from '../EmplyeeOthers/TaskCount/TaskListCount'
import TaskListCard from '../EmplyeeOthers/TaskListCard/TaskListCard'

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