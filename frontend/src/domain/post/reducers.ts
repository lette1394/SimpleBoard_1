import { combineReducers } from 'redux';
import { view } from 'domain/post/view/state';
import { comment } from 'domain/post/comment/state';

export const reducers = combineReducers({
  comment,
  view,
});
