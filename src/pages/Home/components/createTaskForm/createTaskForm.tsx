import React, { useState } from 'react';
import Button from '../../../../components/Button/Button';
import { useTaskDispatch, useTaskState } from '../../../../context/Task';
import { PlusArrow } from '../../../../Icons';
import './createTaskForm.css';

function CreateTaskForm() {

  // Local state definitions
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

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

  // On Submit methods
  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (title !== '' && description !== '') {
      taskDispatch({
        type: 'NEW_TASK',
        payload: {
          task: {
            title,
            description,
            status: statuses[0].name
          }
        }
      });
      setTitle("");
      setDescription("");
    }
  }

  return (
    <>
      <div className="home-header secondary-text">
        <p>
          Add a new Task
        </p>
      </div>
      <form
        onSubmit={onSubmit}
      >
        <div className='item'>
          <input type="text" name="title" placeholder='Title' value={title} onChange={onTextChange} />
        </div>
        <div className='item'>
          <textarea name="description" placeholder='Description' value={description} onChange={onDescriptionChange} />
        </div>
        <div className='item' style={{ paddingTop: '0px' }}>
          <Button text="Add" type='submit' width='100%' icon={(<PlusArrow fill="white" />)} />
        </div>
      </form>
    </>
  );
}

export default CreateTaskForm;
