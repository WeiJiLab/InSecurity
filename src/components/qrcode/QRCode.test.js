import React from 'react';
import { render } from '@testing-library/react';
import QRCode from './QRCode';

test('renders learn react link', () => {
  const { getByText } = render(<QRCode />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
