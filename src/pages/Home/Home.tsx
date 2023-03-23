import React from 'react';
import MutateTaskForm from '../../components/mutateTaskForm/mutateTaskForm';
import { TaskItemInterface } from '../../context/Task';
import TaskList from './components/taskList/TaskList';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <MutateTaskForm headerTitle='Add a new Task' isUpdate={false} task={{} as TaskItemInterface} />
      <TaskList />
    </div>
  );
}

export default Home;
