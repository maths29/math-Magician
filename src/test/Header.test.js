import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('test the top menu display', () => {
  test('check the menu snapshots', () => {
    const tree = renderer.create(
      <Router>
        <Header />
      </Router>,
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });
});
