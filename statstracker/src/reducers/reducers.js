import { STRIKE, BALL, FOUL, HIT, OUT, CLEAR } from '../actions/actions';

const initialState = {
  balls: 0,
  strikes: 0,
  outs: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case STRIKE:
      if (state.strikes === 2) {
        if (state.outs === 2) {
          return { ...state, balls: 0, strikes: 0, outs: 0 };
        } else {
          return { ...state, balls: 0, strikes: 0, outs: state.outs + 1 };
        }
      } else {
        return { ...state, strikes: state.strikes + 1 };
      }

    case BALL:
      if (state.balls === 3) {
        return { ...state, balls: 0, strikes: 0 };
      } else {
        return { ...state, balls: state.balls + 1 };
      }

    case FOUL:
      if (state.strikes === 2) {
        return { ...state };
      } else {
        return { ...state, strikes: state.strikes + 1 };
      }

    case HIT:
      return { ...state, balls: 0, strikes: 0 };

    case OUT:
      if (state.outs === 2) {
        return { ...state, balls: 0, strikes: 0, outs: 0 };
      } else {
        return { ...state, balls: 0, strikes: 0, outs: state.outs + 1 };
      }

    case CLEAR:
      return { ...state, balls: 0, strikes: 0, outs: 0 };

    default:
      return state;
  }
};
