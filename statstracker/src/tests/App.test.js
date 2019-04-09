// Required to get <App /> running:
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/reducers';
import App from '../components/App';
const store = createStore(rootReducer);

import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

const packagedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('<App />', () => {
  it('renders successfully', () => {
    render(packagedApp);
  });
});

describe('Strike Button', () => {
  it('adds a strike 0 to 1', () => {
    const { getByText } = render(packagedApp);
    const button = getByText(/strike$/i);
    fireEvent.click(button);
    getByText(/strikes: 1/i);
  });

  it('resets count on 3rd strike', () => {
    const { getByText } = render(packagedApp);
    const button = getByText(/strike$/i);
    fireEvent.click(button);
    fireEvent.click(button);
    getByText(/balls: 0/i);
    getByText(/strikes: 0/i);
  });
});

describe('Ball Button', () => {
  it('adds a ball 0 to 1', () => {
    const { getByText } = render(packagedApp);
    const button = getByText(/ball$/i);
    fireEvent.click(button);
    getByText(/balls: 1/i);
  });

  it('resets count on 4th ball', () => {
    const { getByText } = render(packagedApp);
    const button = getByText(/ball$/i);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    getByText(/balls: 0/i);
    getByText(/strikes: 0/i);
  });
});

describe('Foul Button', () => {
  it('adds a strike from 0 to 1', () => {
    const { getByText } = render(packagedApp);
    const button = getByText(/foul$/i);
    fireEvent.click(button);
    getByText(/strikes: 1/i);
  });

  it('does not add a strike if strikes already at 2', () => {
    const { getByText } = render(packagedApp);
    const button = getByText(/foul$/i);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    getByText(/strikes: 2/i);
  });
});
