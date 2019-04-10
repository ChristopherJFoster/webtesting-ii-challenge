import React from 'react';
import { connect } from 'react-redux';

import { strike, ball, foul, hit, out, clear } from '../actions/actions';

const Display = ({ strike, ball, foul, hit, out, clear }) => {
  return (
    <div className='dashboard'>
      <button onClick={strike}>Strike</button>
      <button onClick={ball}>Ball</button>
      <button onClick={foul}>Foul</button>
      <button onClick={hit}>Hit</button>
      <button onClick={out}>Out</button>
      <button style={{ display: 'none' }} onClick={clear}>
        Clear
      </button>
    </div>
  );
};

export default connect(
  null,
  { strike, ball, foul, hit, out, clear }
)(Display);
