import { createActionCreator, createReducer } from 'deox';
import { POST } from 'domain/post/actions';

export const setVisible = createActionCreator(
  POST.COMMENT.MODAL.VISIBLE, resolve =>
    (visible: boolean) => resolve(visible));


export const setMessage = createActionCreator(
  POST.COMMENT.MODAL.MESSAGE, resolve =>
    (message: string) => resolve(`[system] : ${message}`),
);


const defaultState = {
  visible: true,
  message: 'this is input box 123',
};

export const modal = createReducer(defaultState, handleAction => [
  handleAction(setVisible, (state, { payload }) => ({
    ...state,
    visible: payload,
  })),
  handleAction(setMessage, (state, { payload }) => ({
    ...state,
    message: payload,
  })),
]);