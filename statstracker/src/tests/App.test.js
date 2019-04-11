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

const { getByText } = render(packagedApp);

// I think this is a pretty good way to click different buttons any number of times:
const click = (button, number = 1) => {
  // Wow! I finally used RegExp in a real project. This was hard for me to figure out! Lots of trial and error and reading...
  const regex = new RegExp(button.concat('$'), 'i');
  for (let i = 0; i < number; i += 1) {
    fireEvent.click(getByText(regex));
  }
};

beforeEach(() => {
  // This is my goofy way of reseting for each test. I created an action, reducer, and button ('clear') to return all counts to 0. The button is styled { display: none }, so the user cannot see it or click it, but the test can use it. I know there is a better way, but I haven't found it yet.
  click('clear');
});

describe('<App />', () => {
  it('renders successfully', () => {
    render(packagedApp);
  });
});

describe('Strike Button', () => {
  it('adds a strike 0 to 1', () => {
    click('strike');
    getByText(/strikes: 1/i);
  });

  it('adds an out on 3rd strike and resets count', () => {
    click('ball', 2);
    click('strike', 3);
    getByText(/balls: 0/i);
    getByText(/strikes: 0/i);
    getByText(/outs: 1/i);
  });
});

describe('Ball Button', () => {
  it('adds a ball 0 to 1', () => {
    click('ball');
    getByText(/balls: 1/i);
  });

  it('resets count on 4th ball', () => {
    click('strike', 2);
    click('ball', 4);
    getByText(/balls: 0/i);
    getByText(/strikes: 0/i);
  });
});

describe('Foul Button', () => {
  it('adds a strike from 0 to 1', () => {
    click('foul');
    getByText(/strikes: 1/i);
  });

  it('does not add a strike if strikes already at 2', () => {
    click('foul', 4);
    getByText(/strikes: 2/i);
  });
});

describe('Hit Button', () => {
  it('resets count', () => {
    click('strike');
    click('ball');
    click('foul');
    click('hit');
    getByText(/balls: 0/i);
    getByText(/strikes: 0/i);
  });

  it('resets count even if count is empty', () => {
    click('hit');
    getByText(/balls: 0/i);
    getByText(/strikes: 0/i);
  });
});

describe('Out Button', () => {
  it('adds an out from 0 to 1 and resets count', () => {
    click('strike');
    click('ball');
    click('foul');
    click('out');
    getByText(/balls: 0/i);
    getByText(/strikes: 0/i);
    getByText(/outs: 1/i);
  });

  it('resets count and resets to 0 outs on 3rd out', () => {
    click('strike', 2);
    click('ball', 2);
    click('out', 3);
    getByText(/balls: 0/i);
    getByText(/strikes: 0/i);
    getByText(/outs: 0/i);
  });
});
