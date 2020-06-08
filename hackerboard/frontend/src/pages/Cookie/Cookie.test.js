import React from 'react';
import { render } from '@testing-library/react';
import Cookie from './Cookie';

test('renders learn react link', () => {
  const { getByText } = render(<Cookie />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
