import React from 'react';
import { render } from '@testing-library/react';
import ArticleDetail from './ArticleDetail';

test('renders learn react link', () => {
  const { getByText } = render(<ArticleDetail />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
