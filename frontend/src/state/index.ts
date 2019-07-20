import { combineReducers } from 'redux';
import { configureStore } from 'deox';
import { reducers as post } from 'domain/post/reducers';

// INDEX 폴더안에 거따가 이 파일 옮기기
const rootReducers = combineReducers({
  post,
});

export const reduxStore = configureStore({
  reducer: rootReducers,
});

const rootState = reduxStore.getState();
export type State = typeof rootState;