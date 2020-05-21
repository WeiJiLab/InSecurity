import React from 'react';
import { render } from '@testing-library/react';
import ArticlesManage from './ArticlesManage';

test('renders learn react link', () => {
  const { getByText } = render(<ArticlesManage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
