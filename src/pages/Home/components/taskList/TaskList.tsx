import React from 'react';
import { useTaskState } from '../../../../context/Task';
import EmptyList from './components/emptyList/EmptyList';
import TaskItem from './components/taskItem/TaskItem';
import './TaskList.css';

function TaskList() {
  const { taskList } = useTaskState();
  return (
      <div className='task-list'>
        <div className='list-header list-header-radius primary-bg-color primary-text'>
          Tasks
        </div>
        <div className='list-header primary-bg-color primary-text' style={{ marginTop: '-30px'}}>
        </div>
        <div className='list-body secondary-bg-color'>
          {taskList?.length > 0 ? (
            <div className='list-body-grid'>
              {taskList?.map((task: any) => (<TaskItem key={task.id} {...task} />))}
            </div>
          ) : <EmptyList />}
        </div>
      </div>
  );
}

export default TaskList;
