import React from 'react';
import { render } from '@testing-library/react';
import Subscribe from './Subscribe';

test('renders learn react link', () => {
  const { getByText } = render(<Subscribe />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
