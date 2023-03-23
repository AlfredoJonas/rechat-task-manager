import React from 'react';
import CreateTaskForm from './components/createTaskForm/CreateTaskForm';
import TaskList from './components/taskList/TaskList';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <CreateTaskForm />
      <TaskList />
    </div>
  );
}

export default Home;
