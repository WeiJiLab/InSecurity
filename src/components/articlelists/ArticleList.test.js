import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from './ArticleList';

test('renders learn react link', () => {
  const { getByText } = render(<ArticleList />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
