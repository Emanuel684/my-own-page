import { combineReducers } from 'redux';
import { AuthState, AuthReducer } from './auth/reducer';
import { MainReducer, MainState } from './main/reducer';

export interface RootState {
  auth: AuthState;
  main: MainState;
}

export const rootReducer = combineReducers<RootState | undefined>({
  auth: AuthReducer,
  main: MainReducer,
});
