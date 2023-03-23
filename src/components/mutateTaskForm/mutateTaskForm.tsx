import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { TaskItemInterface, useTaskDispatch, useTaskState } from '../../context/Task';
import { PenEdiPencilIcon, PlusArrow } from '../../Icons';
import './mutateTaskForm.css';
import { useNavigate } from 'react-router';

interface TaskFormType {
  isUpdate: boolean;
  headerTitle: string;
  textAreaHeight?: string;
  task: TaskItemInterface;
}

function MutateTaskForm({headerTitle, textAreaHeight, isUpdate=false, task}: TaskFormType) {

  const navigate = useNavigate();

  // Local state definitions
  const [title, setTitle] = useState<string>(isUpdate && task ? task?.title : "");
  const [description, setDescription] = useState<string>(isUpdate && task ? task?.description : "");
  const [status, setStatus] = useState<string>(isUpdate && task ? task?.status : "");

  // Global task context definitions
  const { statuses } = useTaskState();
  const taskDispatch = useTaskDispatch();

  // On change methods
  const onTextChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };
  const onDescriptionChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    setDescription(e.currentTarget.value);
  };
  const onStatusChange = (e: React.FormEvent<HTMLSelectElement>): void => {
    setStatus(e.currentTarget.value);
  };

  // On Submit methods
  const submitNew = () => {
    if (title !== '' && description !== '') {
      taskDispatch({
        type: 'NEW_TASK',
        payload: {
          task: {
            id: 0,
            title,
            description,
            status: statuses[0].name
          }
        }
      });
      cleanStates();
    }
  }
  const submitUpdate = () => {
    if (title !== '' && description !== '' && status !== '') {
      taskDispatch({
        type: 'UPDATE_TASK',
        payload: {
          task: {
            ...task,
            title,
            description,
            status,
            oldStatus: task?.status,
          }
        }
      });
      cleanStates();
      navigate("/home");
    }
  }
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (isUpdate) {
      submitUpdate();
    } else {
      submitNew();
    }
  }

  // To prevent url without real ids
  useEffect(() => {
    if (isUpdate && !task) {
      navigate("/home");
    }
  }, [isUpdate, task, navigate]);


  // Other methods
  const cleanStates = () => {
    setTitle("");
    setDescription("");
    setStatus("");
  };
  const filterStatusesBasedOnRules = () => {
    // Find status object with real task
    const currentStatus = statuses.find((s) => s.name === task?.status) || {id: -1};
    // Filter based on the stablished rules or ids
    return statuses.filter((s) => s.rules.includes(currentStatus.id) || s.id === currentStatus.id);
  };

  return (
    <>
      <div className="home-header secondary-text">
        <p>
          {headerTitle}
        </p>
      </div>
      <form
        onSubmit={onSubmit}
      >
        <div className='item'>
          <input
          type="text"
          name="title"
          placeholder='Title'
          value={title}
          onChange={onTextChange}
          style={{ borderBottom: '1px solid ' + (isUpdate ? '#4685c1' : '#c1c2c3')}}
          />
        </div>
        <div className='item'>
          <textarea
            name="description"
            placeholder='Description'
            value={description}
            onChange={onDescriptionChange}
            style={{ height: textAreaHeight || '10vh' }}
          />
        </div>

        {/* Render components based on if the JSX was rendered to create or update a task */}
        {isUpdate && (
          <div className='item'>
            <select
              name="select"
              data-testid="statusDropdown"
              value={status}
              onChange={onStatusChange}
              style={{ borderBottom: '1px solid ' + (isUpdate ? '#4685c1' : '#c1c2c3')}}
            >
              {filterStatusesBasedOnRules().map(function(s) { 
                  return (<option key={s.id} value={s.name}>{s.name}</option>);
              })}
            </select>
          </div>
        )}
        {isUpdate ? (
          <div className='button-group' style={{ paddingTop: '0px' }}>
            <Button
              text="Edit"
              data-testid="submit-button"
              type='submit'
              style={{width: '40%'}}
              icon={(<PenEdiPencilIcon width={10} height={10} fill="white" />)}
            />
            <Button
              text="Cancel"
              onClick={() => {
                cleanStates();
                navigate("/home");
              }}
              style={{width: '40%', backgroundColor: 'white', border: '1px solid #d8d9d9', color: '#717070'}}
            />
          </div>
        ) : (
          <div className='item' style={{ paddingTop: '0px' }}>
            <Button text="Add" type='submit' style={{width: '100%'}} icon={(<PlusArrow fill="white" />)} />
          </div>
        )}
      </form>
    </>
  );
}

export default MutateTaskForm;
