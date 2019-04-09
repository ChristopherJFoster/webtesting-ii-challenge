import React from 'react';
import { connect } from 'react-redux';

const Display = ({ balls, strikes }) => {
  return (
    <div className='display'>
      <h2 id='display-balls'>Balls: {balls}</h2>
      <h2 id='display-strikes'>Strikes: {strikes}</h2>
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
