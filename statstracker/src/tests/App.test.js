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
    getByText(/strikes: 0/i);
  });
});
