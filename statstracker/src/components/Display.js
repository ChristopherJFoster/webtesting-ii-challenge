import React from 'react';
import { connect } from 'react-redux';

const Display = ({ balls, strikes, outs }) => {
  return (
    <div className='display'>
      <h2>Balls: {balls}</h2>
      <h2>Strikes: {strikes}</h2>
      <h2>Outs: {outs}</h2>
    </div>
  );
};

const mapStateToProps = ({ balls, strikes, outs }) => ({
  balls,
  strikes,
  outs
});

export default connect(
  mapStateToProps,
  null
)(Display);
