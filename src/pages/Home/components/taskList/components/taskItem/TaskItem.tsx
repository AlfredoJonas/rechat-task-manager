import React from 'react';
import { Link } from 'react-router-dom';
import { PenEdiPencilIcon } from '../../../../../../Icons';
import './TaskItem.css';

interface TaskItemInterface {
  title: string;
  description: string;
  status: string;
}

function TaskItem({title, description, status}: TaskItemInterface) {
  return (
    <div className='task-item'>
      <div className='task-item-body'>
        <span className='secondary-text' style={{ fontSize: '15px'}}>{title}</span>
        <div>
          <span className='tertiary-text description-text'>{description}</span>
        </div>
        <div className='bottom-item'>
          <div className='primary-text primary-bg-color label-bottom-item'>{status}</div>
          <Link to="edit">
            <PenEdiPencilIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
