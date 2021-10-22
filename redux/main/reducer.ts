import { Reducer } from 'redux';
import {
  BLOCK_OBJECT,
  ACTIVE_OBJECT,
  NETWORK_OFFLINE,
  NETWORK_ONLINE,
  PENDING_IMAGE,
  RESET_PENDING,
  SHOW_INSTRUCTIONS,
  HIDE_INSTRUCTIONS,
} from '../actions';
import { MainAction } from './actions';

export interface MainState {
  readonly active: boolean;
  readonly isOnline: boolean;
  readonly pending: Array<any>;
  readonly instructions: boolean;
}

export const INIT_MAIN_STATE = {
  active: true,
  isOnline: true,
  pending: [],
  instructions: true,
};

export const MainReducer: Reducer<MainState, MainAction> = (
  state = INIT_MAIN_STATE,
  action: MainAction,
) => {
  switch (action.type) {
    case BLOCK_OBJECT:
      return { ...state, active: false };
    case ACTIVE_OBJECT:
      return { ...state, active: true };
    case NETWORK_OFFLINE:
      return { ...state, isOnline: false };
    case NETWORK_ONLINE:
      return { ...state, isOnline: true };
    case PENDING_IMAGE:
      return { ...state, pending: action.payload };
    case RESET_PENDING:
      return { ...state, pending: action.payload };
    case SHOW_INSTRUCTIONS:
      return { ...state, instructions: true };
    case HIDE_INSTRUCTIONS:
      return { ...state, instructions: false };
    default:
      return { ...state };
  }
};
