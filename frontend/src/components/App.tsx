import React from 'react';
import { useSelector } from 'react-redux';
import { TetrisState } from '../redux/reducers/statetypes';

export function App(): JSX.Element {
  const tetris = useSelector((state: TetrisState) => state.tetris);
  console.log(tetris);

  return <div>hello does this work</div>;
}
