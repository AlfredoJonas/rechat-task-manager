import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { App } from '../../App';
import { initialState } from '../../context/Task';

test('Check wrong edit url', async () => {
  window.history.pushState({}, '', "/item/1");
  render(<App />);
  const editHeader = screen.queryByText(/Edit Task/i)
  expect(editHeader).not.toBeInTheDocument();
});


test('Check edit existing task', async () => {
  const originalTask = {
    id: 2,
    title: 'This is great title',
    description: 'and me a great description',
    status: 'ToDo'
  };
  render(
    <App initialStateAux={{
      ...initialState,
      taskList: [
        originalTask,
      ],
    }} />
  );

  
  const taskItem = screen.getByTestId("task-icon-2");
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    userEvent.click(taskItem);
  });

  const titleInput = screen.getByPlaceholderText(/Title/i);
  const descriptionTextArea = screen.getByPlaceholderText(/Description/i);

  const newTitle = "This the new new title";
  const newDescription = "This the new new description";
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    userEvent.type(titleInput, newTitle);
    userEvent.type(descriptionTextArea, newDescription);
  });

  const renderedDescription = screen.getByText(originalTask.description + newDescription)
  expect(renderedDescription).toBeInTheDocument();

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    userEvent.click(screen.getByTestId('submit-button'));
  });

  const renderedTitle = screen.getByText(originalTask.title + newTitle)
  expect(renderedTitle).toBeInTheDocument();
  expect(screen.getByText(/Add a new Task/i)).toBeInTheDocument();
});



test('Check statuses restriction', async () => {
  render(
    <App initialStateAux={{
      ...initialState,
      taskList: [
        {
          id: 1,
          title: 'This is great title',
          description: 'and me a great description',
          status: 'ToDo'
        }
      ],
    }} />
  );

  const taskItem = screen.getByTestId("task-icon-1");
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    userEvent.click(taskItem);
  });

  const dropdown = screen.getByTestId(/statusDropdown/i);
  expect(dropdown).toBeInTheDocument();

  userEvent.click(dropdown);
  expect(screen.getByText(/InProgress/i)).toBeInTheDocument();
  expect(screen.queryByText(/InQA/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Done/i)).not.toBeInTheDocument();
});