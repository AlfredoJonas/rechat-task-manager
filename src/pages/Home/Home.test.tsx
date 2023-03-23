import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { App } from '../../App';

test('Check render and simplest form behavior for adding a new task', async () => {
  render(<App />);
  const addElements = screen.getAllByText(/Add/i);
  expect(addElements).toHaveLength(2);

  // Check that there is no card related data rendered
  expect(screen.queryByText(/ToDo/i)).not.toBeInTheDocument();

  // Check behavior of title input
  const titleText = "Build home page";
  const titleInput = screen.getByPlaceholderText("Title");
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    userEvent.type(titleInput, titleText);
  });
  expect(titleInput).toHaveValue(titleText);

  // Check behavior of description text area
  const desText = "do the building of the home page";
  const desInput = screen.getByPlaceholderText("Description");
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    userEvent.type(desInput, desText);
  });
  expect(desInput).toHaveValue(desText);

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    userEvent.click(addElements[1]);
  });

  // After click it should empty the fields
  expect(titleInput).toHaveValue("");
  expect(desInput).toHaveValue("");

  // AND it should to add the new task to the context list and render it OK
  const taskCard = screen.getByText(/ToDo/i);
  expect(taskCard).toBeInTheDocument();
});
