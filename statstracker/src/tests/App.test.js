import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../reducers/reducers';

import App from '../components/App';

const store = createStore(rootReducer);

import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('<App />', () => {
  it('renders successfully', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
