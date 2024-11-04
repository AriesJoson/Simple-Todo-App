import React from 'react'
import '../css/taskcard.css'
import deleteIcon from '../assets/delete.png'
import Tag from './tag.jsx'

const TaskCard = ({title, tags}) => {
  return (
    <article className='task-card'>
        <p className='task-text'>{title}</p>
        <div className='task-card-bottom-line'>
          <div className='task-card-tags'>
              {
                tags.map((tag, index) => <Tag key={index} tagName={tag} selected={true}/>)
              }
          </div>
          <div className='task-delete'>
              <img className="delete-icon" src={deleteIcon} alt="" />
          </div>
        </div>
    </article>
  )
}

export default TaskCard