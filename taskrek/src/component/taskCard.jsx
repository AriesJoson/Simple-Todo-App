import React from 'react'
import '../css/taskcard.css'
import deleteIcon from '../assets/delete.png'
import Tag from './tag.jsx'

const TaskCard = () => {
  return (
    <article className='task-card'>
        <p className='task-text'>Sample</p>
        <div className='task-card-tags'>
            <Tag tagName="HTML"/>
            <Tag tagName="CSS"/>
        </div>
        <div className='task-delete'>
            <img className="delete-icon" src={deleteIcon} alt="" />
        </div>
    </article>
  )
}

export default TaskCard