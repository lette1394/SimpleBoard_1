import { combineReducers } from 'redux';
import { modal } from 'domain/post/comment/modal/state';

export const comment = combineReducers({
  modal,
});