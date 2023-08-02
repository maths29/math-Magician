import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

test('Home renders correctly on the browser', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
