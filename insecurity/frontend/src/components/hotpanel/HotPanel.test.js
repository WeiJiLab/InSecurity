import React from 'react';
import { render } from '@testing-library/react';
import HotPanel from './HotPanel';

test('renders learn react link', () => {
  const { getByText } = render(<HotPanel />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
