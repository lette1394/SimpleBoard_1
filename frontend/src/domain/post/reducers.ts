import { combineReducers } from 'redux';
import { comment } from 'domain/post/comment/state';

export const post = combineReducers({
  comment,
});
