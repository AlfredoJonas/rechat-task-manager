import React from 'react';
import { Link } from 'react-router-dom';
import { TaskItemInterface } from '../../../../../../context/Task';
import { PenEdiPencilIcon } from '../../../../../../Icons';
import './TaskItem.css';

function TaskItem({id: taskId, title, description, status}: TaskItemInterface) {
  return (
    <div className='task-item'>
      <div className='task-item-body'>
        <span className='secondary-text title-text'>{title}</span>
        <div>
          <span className='tertiary-text description-text'>{description}</span>
        </div>
        <div className='bottom-item'>
          <div className='primary-text primary-bg-color label-bottom-item'>{status}</div>
          <Link to={"/edit/"+taskId} data-testid={"task-icon-"+taskId}>
            <PenEdiPencilIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
