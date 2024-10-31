import React from 'react'
import '../css/taskcolumn.css'
import TaskCard from './taskCard.jsx'

const TaskColumn = (props) => {
    return (
        <section className='task-column'>
            <h2 className='task-column-heading'>
                <img className='task-column-icon' src={props.icon} alt=''/>{props.title}
            </h2>
            <TaskCard />
        </section>
    )
}

export default TaskColumn