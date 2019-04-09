import React from 'react';
import { connect } from 'react-redux';

const Display = ({ balls, strikes }) => {
  return (
    <div className='display'>
      <h2>Balls: {balls}</h2>
      <h2>Strikes: {strikes}</h2>
    </div>
  );
};

const mapStateToProps = ({ balls, strikes }) => ({
  balls,
  strikes
});

export default connect(
  mapStateToProps,
  null
)(Display);
