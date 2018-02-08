import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('Containers:App', () => {
  beforeAll(() => {
    window.sessionStorage = {
      getItem() { },
      setItem() { },
    };
  });

  it('renders without crashing', () => {
    console.log('process.env.CI',process.env.CI);
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

