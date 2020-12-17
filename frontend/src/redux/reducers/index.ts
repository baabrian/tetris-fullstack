import { combineReducers } from 'redux';
import { tetrisReducer as tetris } from './tetrisReducer';

export default combineReducers({
  tetris,
});
