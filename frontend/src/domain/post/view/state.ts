import { createActionCreator, createReducer } from 'deox';
import { POST } from 'domain/post/actions';

const comment = createActionCreator(
  POST.VIEW.COMMENT.toString(),
  resolve => (comment: string) => resolve(comment),
);

export const view = createReducer('initial', handleAction => [
  handleAction(comment, (state, { payload }) => payload),
]);