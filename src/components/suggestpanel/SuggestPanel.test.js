import React from 'react';
import { render } from '@testing-library/react';
import SuggestPanel from './SuggestPanel';

test('renders learn react link', () => {
  const { getByText } = render(<SuggestPanel />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
