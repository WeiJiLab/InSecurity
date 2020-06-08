import React from 'react';
import { render } from '@testing-library/react';
import SuggestListPanel from './SuggestListPanel';

test('renders learn react link', () => {
  const { getByText } = render(<SuggestListPanel />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
