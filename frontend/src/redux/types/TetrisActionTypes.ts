import { TetrisTypes } from './TetrisTypes';

type TetrisHighScoreType = {
  type: TetrisTypes.FETCH_HIGH_SCORES;
  payload: number[];
};

export type TetrisActionTypes = TetrisHighScoreType;
