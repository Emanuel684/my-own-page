/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint max-len: ["error", { "code": 120 }] */
import { Action, ActionCreator } from 'redux';
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

export interface BlockObjectAction extends Action {
  type: 'BLOCK_OBJECT';
}
export interface ActiveObjectAction extends Action {
  type: 'ACTIVE_OBJECT';
}
export interface NetworkOnlineAction extends Action {
  type: 'NETWORK_ONLINE';
}
export interface NetworkOfflineAction extends Action {
  type: 'NETWORK_OFFLINE';
}
export interface PendingImageAction extends Action {
  type: 'PENDING_IMAGE';
  payload: any;
}
export interface ResetPendingAction extends Action {
  type: 'RESET_PENDING';
  payload: any;
}
export interface ShowInstructionsAction extends Action {
  type: 'SHOW_INSTRUCTIONS';
}
export interface HideInstructionsAction extends Action {
  type: 'HIDE_INSTRUCTIONS';
}

export type MainAction =
  | ActiveObjectAction
  | BlockObjectAction
  | NetworkOnlineAction
  | NetworkOfflineAction
  | PendingImageAction
  | ResetPendingAction
  | ShowInstructionsAction
  | HideInstructionsAction;

export const activeObject: ActionCreator<ActiveObjectAction> = () => ({
  type: ACTIVE_OBJECT,
});
export const blockObject: ActionCreator<BlockObjectAction> = () => ({
  type: BLOCK_OBJECT,
});
export const networkOffline: ActionCreator<NetworkOfflineAction> = () => ({
  type: NETWORK_OFFLINE,
});
export const networkOnline: ActionCreator<NetworkOnlineAction> = () => ({
  type: NETWORK_ONLINE,
});
export const pendingImage: ActionCreator<PendingImageAction> = (
  newPending,
) => ({
  type: PENDING_IMAGE,
  payload: newPending,
});
export const resetPending: ActionCreator<ResetPendingAction> = (
  newPending,
) => ({
  type: RESET_PENDING,
  payload: newPending,
});
export const showInstructions: ActionCreator<ShowInstructionsAction> = () => ({
  type: SHOW_INSTRUCTIONS,
});
export const hideInstructions: ActionCreator<HideInstructionsAction> = () => ({
  type: HIDE_INSTRUCTIONS,
});
