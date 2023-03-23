import React from 'react';
import EmptyList from './components/emptyList/EmptyList';
import TaskItem from './components/taskItem/TaskItem';
import './TaskList.css';

const tasks = [
  {
    title: "Task Title goes Here",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies leo integer malesuada",
    status: "In Progress"
  },
  {
    title: "Una tarea",
    description: "Una descripcion",
    status: "In Progress"
  },
  {
    title: "Una tarea",
    description: "Una descripcion",
    status: "In Progress"
  },
  {
    title: "Una tarea",
    description: "Una descripcion",
    status: "In Progress"
  },
  {
    title: "Una tarea",
    description: "Una descripcion",
    status: "In Progress"
  },
  {
    title: "Una tarea",
    description: "Una descripcion",
    status: "In Progress"
  },
  {
    title: "Una tarea",
    description: "Una descripcion",
    status: "In Progress"
  },
  {
    title: "Una tarea",
    description: "Una descripcion",
    status: "In Progress"
  },
  {
    title: "Una tarea",
    description: "Una descripcion",
    status: "In Progress"
  },
  {
    title: "Una tarea",
    description: "Una descripcion",
    status: "In Progress"
  },
]

function TaskList() {
  return (
      <div className='task-list'>
        <div className='list-header list-header-radius primary-bg-color primary-text'>
          Tasks
        </div>
        <div className='list-header primary-bg-color primary-text' style={{ marginTop: '-30px'}}>
        </div>
        <div>
          <div className='list-body secondary-bg-color'>
            {tasks.length > 0 ? (tasks.map((task) => (<TaskItem {...task} />))) : <EmptyList />}
          </div>
        </div>
      </div>
  );
}

export default TaskList;
