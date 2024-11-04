import React, {useState} from 'react';
import '../css/taskform.css';
import Tag from './tag.jsx';

const TaskForm = ({setTasks}) => {
    const [taskData, setTaskData] = useState({
        task: '',
        status: 'todo',
        tags: []
    });

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag);
    }

    const selectTag = (tag) => {
        if(taskData.tags.some(item => item === tag)) {
           const filterTags = taskData.tags.filter(item => item !== tag)
           setTaskData(prev => {
               return {...prev, tags: filterTags}
           })
        } else {
            setTaskData(prev => {
                return {...prev, tags: [...prev.tags, tag]};
            })
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setTaskData((prev) => {
            return { ...prev, [name]: value };
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData);

        setTasks(prev => {
            return [...prev, taskData];
        });
    }

  return (
    <header className='app-header'>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                className='task-input' 
                placeholder='Enter your task' 
                onChange={handleChange}
                name='task'
            />

            <div className='task-form-bottom-line'>
                <div>
                    <Tag tagName='HTML' selectTag = {selectTag} selected = {checkTag('HTML')}/>
                    <Tag tagName='CSS' selectTag = {selectTag} selected = {checkTag('CSS')}/>
                    <Tag tagName='Javascript' selectTag = {selectTag} selected = {checkTag('Javascript')}/>
                    <Tag tagName='ReactJS' selectTag = {selectTag} selected = {checkTag('ReactJS')}/>
                </div>
                <div>
                    <select className='task-status' name='status' onChange={handleChange}>
                        <option value='todo'>To Do</option>
                        <option value='doing'>Doing</option>
                        <option value='done'>Done</option>
                    </select>
                    <button type='submit' className='task-submit'>+ Add Task</button>
                </div>
            </div>
        </form>
    </header>
  )
}

export default TaskForm;