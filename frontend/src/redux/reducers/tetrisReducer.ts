import { TetrisBoard, Tetris, TetrisTypes, TetrisActionTypes } from '../types';

const INITIAL_STATE: Tetris = {
  board: Array.from(Array(TetrisBoard.Height), () =>
    new Array(TetrisBoard.Width).fill(0)
  ),
  height: TetrisBoard.Height,
  width: TetrisBoard.Width,
  highScore: 0,
  gameOver: false,
  allHighScores: [],
};

export const tetrisReducer = (
  state = INITIAL_STATE,
  action: TetrisActionTypes
): Tetris => {
  switch (action.type) {
    case TetrisTypes.FETCH_HIGH_SCORES: {
      return {
        ...state,
        allHighScores: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
