import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { App } from '../../App';

test('Check render and simplest form behavior for adding a new task', async () => {
  render(<App />);
  const addElements = screen.getAllByText(/Add/i);
  expect(addElements).toHaveLength(2);

  const titleText = "Build home page";
  const titleInput = screen.getByPlaceholderText("Title");
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    userEvent.type(titleInput, titleText);
  });
  expect(titleInput).toHaveValue(titleText);

  
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
  expect(titleInput).toHaveValue("");
  expect(desInput).toHaveValue("");

  const taskCard = screen.getByText(titleText);
  expect(taskCard).toBeInTheDocument();
});
