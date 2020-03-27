import { combineReducers } from 'redux';
import character from './character.reducers';
import characters from './characters.reducers';

export default combineReducers({
  character,
  characters,
});
