import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';

test('renders learn react link', () => {
  const { getByText } = render(<Menu />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
