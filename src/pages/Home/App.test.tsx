import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './Home';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/coding\/hiring/i);
  expect(linkElement).toBeInTheDocument();
});
