import React from 'react';
import CreateTaskForm from './components/createTaskForm/createTaskForm';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Add a new Task
        </p>
      </header>
      <CreateTaskForm />
    </div>
  );
}

export default Home;
