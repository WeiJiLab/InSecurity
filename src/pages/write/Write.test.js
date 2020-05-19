import React from 'react';
import { render } from '@testing-library/react';
import Write from './Write';

test('renders learn react link', () => {
  const { getByText } = render(<Write />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
