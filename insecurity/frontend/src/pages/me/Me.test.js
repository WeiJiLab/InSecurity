import React from 'react';
import { render } from '@testing-library/react';
import Me from './Me';

test('renders learn react link', () => {
  const { getByText } = render(<Me />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
