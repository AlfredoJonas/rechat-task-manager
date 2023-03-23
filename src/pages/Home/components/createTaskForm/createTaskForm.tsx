import React, { useState } from 'react';
import Button from '../../../../components/Button/Button';
import { useTaskDispatch, useTaskState } from '../../../../context/Task';
import { PlusArrow } from '../../../../Icons';
import './CreateTaskForm.css';

function CreateTaskForm() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { statuses } = useTaskState();
  const taskDispatch = useTaskDispatch();

  const onTextChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };

  const onDescriptionChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    setDescription(e.currentTarget.value);
  };

  return (
    <form
      onSubmit={(e: React.SyntheticEvent) => {
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
      }}
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
  );
}

export default CreateTaskForm;
