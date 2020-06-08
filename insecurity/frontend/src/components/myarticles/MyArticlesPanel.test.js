import React from 'react';
import { render } from '@testing-library/react';
import MyArticlesPanel from './MyArticlesPanel';

test('renders learn react link', () => {
  const { getByText } = render(<MyArticlesPanel />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
