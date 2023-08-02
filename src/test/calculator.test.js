import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../components/calculator';

test('Calculator renders correctly on the browser', () => {
  const { asFragment } = render(<Calculator />);
  expect(asFragment()).toMatchSnapshot();
});
