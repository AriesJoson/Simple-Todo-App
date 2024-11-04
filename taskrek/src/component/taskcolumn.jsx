import React from 'react'
import '../css/taskcolumn.css'
import TaskCard from './taskCard.jsx'

const TaskColumn = ({title, icon, tasks, status}) => {
    return (
        <section className='task-column'>
            <h2 className='task-column-heading'>
                <img className='task-column-icon' src={icon} alt='' /> {title}
            </h2>
            {tasks.map (
                (task, index) => 
                    task.status === status && (
                    <TaskCard 
                        key={index} 
                        title={task.task} 
                        tags={task.tags}
                    />
                )
            )}
        </section>
    )
}

export default TaskColumn