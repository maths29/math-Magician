import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

describe('test the quotes loading', () => {
  test('check the Quotes snapshots', () => {
    const tree = renderer.create(
      <Router>
        <Quotes />
      </Router>,
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });
});
