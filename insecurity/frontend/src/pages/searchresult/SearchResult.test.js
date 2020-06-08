import React from 'react';
import { render } from '@testing-library/react';
import SearchResult from './SearchResult';

test('renders learn react link', () => {
  const { getByText } = render(<SearchResult />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
