export interface Tetris {
  //has to be an array that stores an array of numbers or shape objects
  board: number[][];
  height: number;
  width: number;
  highScore: number;
  gameOver: boolean;
  allHighScores: number[];
}
