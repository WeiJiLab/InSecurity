import React from 'react';
import { render } from '@testing-library/react';
import Register from './Register';

test('renders learn react link', () => {
  const { getByText } = render(<Register />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
