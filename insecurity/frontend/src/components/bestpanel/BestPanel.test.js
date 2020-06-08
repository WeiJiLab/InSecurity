import React from 'react';
import { render } from '@testing-library/react';
import BestPanel from './BestPanel';

test('renders learn react link', () => {
  const { getByText } = render(<BestPanel />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
