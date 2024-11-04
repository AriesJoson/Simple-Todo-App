import React, {useState} from 'react';

import './App.css';
import TaskForm from './component/taskform';
import TaskColumn from './component/taskcolumn';
import todoIcon from './assets/ToDo.png'
import doingIcon from './assets/Doing.png'
import doneIcon from './assets/Done.png'

const App = () => {
  const [tasks, setTasks] = useState([]);
 
  console.log('tasks', tasks);

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks} />
      <main className='app-main'>
        <TaskColumn title="To do" icon={todoIcon} tasks={tasks} status='todo'/>
        <TaskColumn title="Doing" icon={doingIcon} tasks={tasks} status='doing'/>
        <TaskColumn title="Done" icon={doneIcon} tasks={tasks} status='done'/>
      </main>
    </div>
  )
}

export default App