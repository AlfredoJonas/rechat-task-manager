import React from 'react';
import EmptyList from './components/emptyList/EmptyList';
import TaskItem from './components/taskItem/TaskItem';
import './TaskList.css';

function TaskList() {
  const tasks = [
    {
      id: 1,
      title: "Task Title goes Here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies leo integer malesuada",
      status: "InProgress"
    },
    {
      id: 2,
      title: "Una tarea",
      description: "Una descripcion",
      status: "InProgress"
    }
  ];
  return (
      <div className='task-list'>
        <div className='list-header list-header-radius primary-bg-color primary-text'>
          Tasks
        </div>
        <div className='list-header primary-bg-color primary-text' style={{ marginTop: '-30px'}}>
        </div>
        <div>
          <div className='list-body secondary-bg-color'>
            {tasks.length > 0 ? (tasks.map((task) => (<TaskItem key={task.id} {...task} />))) : <EmptyList />}
          </div>
        </div>
      </div>
  );
}

export default TaskList;
