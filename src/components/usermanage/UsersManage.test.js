import React from 'react';
import { render } from '@testing-library/react';
import UsersManage from './UsersManage';

test('renders learn react link', () => {
  const { getByText } = render(<UsersManage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
