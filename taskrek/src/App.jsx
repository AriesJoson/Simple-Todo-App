import React from 'react';

import './App.css';
import TaskForm from './component/taskform';
import TaskColumn from './component/taskcolumn';
import todoIcon from './assets/ToDo.png'
import doingIcon from './assets/Doing.png'
import doneIcon from './assets/Done.png'

const App = () => {
  return (
    <div className='app'>
      <TaskForm />
      <main className='app-main'>
        <TaskColumn title="To do" icon={todoIcon}/>
        <TaskColumn title="Doing" icon={doingIcon}/>
        <TaskColumn title="Done" icon={doneIcon}/>
      </main>
    </div>
  )
}

export default App