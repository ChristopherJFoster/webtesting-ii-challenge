export const STRIKE = 'STRIKE';
export const BALL = 'BALL';
export const FOUL = 'FOUL';
export const HIT = 'HIT';
export const OUT = 'OUT';
export const CLEAR = 'CLEAR';

export const strike = () => ({ type: STRIKE });
export const ball = () => ({ type: BALL });
export const foul = () => ({ type: FOUL });
export const hit = () => ({ type: HIT });
export const out = () => ({ type: OUT });
export const clear = () => ({ type: CLEAR });
