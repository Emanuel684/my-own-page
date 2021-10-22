/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint max-len: ["error", { "code": 120 }] */
import { Action, ActionCreator } from 'redux';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  RESET_MESSAGE,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  CONFIRM_REGISTER_USER,
  CONFIRM_REGISTER_USER_SUCCESS,
  CONFIRM_REGISTER_USER_ERROR,
  LOGOUT_USER_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  RESEND_CONFIRMATION_CODE,
  RESEND_CONFIRMATION_CODE_ERROR,
  RESEND_CONFIRMATION_CODE_SUCCESS,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_SUBMIT,
  FORGOT_PASSWORD_SUBMIT_ERROR,
  FORGOT_PASSWORD_SUBMIT_SUCCESS,
  COMPLETE_NEW_PASSWORD,
  COMPLETE_NEW_PASSWORD_ERROR,
  COMPLETE_NEW_PASSWORD_SUCCESS,
  COMPLETE_NEW_PASSWORD_SUBMIT,
  COMPLETE_NEW_PASSWORD_SUBMIT_ERROR,
  COMPLETE_NEW_PASSWORD_SUBMIT_SUCCESS,
  UPDATE_USER,
} from '../actions';

export interface User {
  readonly email: string;
  readonly sub: string;
  readonly groups: string[];
  readonly currentProfile: string;
}

export interface LoginUserAction extends Action {
  type: 'LOGIN_USER';
  payload: {
    user: User;
    navigation: any;
    confirmInvitation: any;
    invitationEmail: any;
    nodeId: any;
    token: any;
  };
}
export interface LoginUserSuccessAction extends Action {
  type: 'LOGIN_USER_SUCCESS';
  payload: any;
}
export interface LoginUserErrorAction extends Action {
  type: 'LOGIN_USER_ERROR';
  payload: { message: string };
}
export interface ResetMessageAction extends Action {
  type: 'RESET_MESSAGE';
}

export interface RegisterUserAction extends Action {
  type: 'REGISTER_USER';
  payload: { user: User; navigation: any; params: any };
}
export interface RegisterUserSuccessAction extends Action {
  type: 'REGISTER_USER_SUCCESS';
  payload: any;
}
export interface RegisterUserErrorAction extends Action {
  type: 'REGISTER_USER_ERROR';
  payload: { message: string };
}

export interface ConfirmRegisterUserAction extends Action {
  type: 'CONFIRM_REGISTER_USER';
  payload: {
    user: { email: string; code: string };
    navigation: any;
    params: any;
  };
}
export interface ConfirmRegisterUserSuccessAction extends Action {
  type: 'CONFIRM_REGISTER_USER_SUCCESS';
  payload: any;
}
export interface ConfirmRegisterUserErrorAction extends Action {
  type: 'CONFIRM_REGISTER_USER_ERROR';
  payload: { message: string };
}

export interface LogoutUserAction extends Action {
  type: 'LOGOUT_USER';
  payload: { navigation: any };
}
export interface LogoutUserSuccessAction extends Action {
  type: 'LOGOUT_USER_SUCCESS';
}
export interface LogoutUserErrorAction extends Action {
  type: 'LOGOUT_USER_ERROR';
  payload: { message: string };
}

export interface ResendConfirmationCodeAction extends Action {
  type: 'RESEND_CONFIRMATION_CODE';
  payload: { username: string };
}
export interface ResendConfirmationCodeSuccessAction extends Action {
  type: 'RESEND_CONFIRMATION_CODE_SUCCESS';
}
export interface ResendConfirmationCodeErrorAction extends Action {
  type: 'RESEND_CONFIRMATION_CODE_ERROR';
  payload: { message: string };
}

export interface ForgotPasswordAction extends Action {
  type: 'FORGOT_PASSWORD';
  payload: { username: string; navigation: any };
}
export interface ForgotPasswordSuccessAction extends Action {
  type: 'FORGOT_PASSWORD_SUCCESS';
  payload: { username: string };
}
export interface ForgotPasswordErrorAction extends Action {
  type: 'FORGOT_PASSWORD_ERROR';
  payload: { message: string };
}

export interface ForgotPasswordSubmitAction extends Action {
  type: 'FORGOT_PASSWORD_SUBMIT';
  payload: { username: string; code: string; password: string };
}
export interface ForgotPasswordSubmitSuccessAction extends Action {
  type: 'FORGOT_PASSWORD_SUBMIT_SUCCESS';
}
export interface ForgotPasswordSubmitErrorAction extends Action {
  type: 'FORGOT_PASSWORD_SUBMIT_ERROR';
  payload: { message: string };
}

export interface CompleteNewPasswordAction extends Action {
  type: 'COMPLETE_NEW_PASSWORD';
  payload: { user: any };
}
export interface CompleteNewPasswordSuccessAction extends Action {
  type: 'COMPLETE_NEW_PASSWORD_SUCCESS';
}
export interface CompleteNewPasswordErrorAction extends Action {
  type: 'COMPLETE_NEW_PASSWORD_ERROR';
  payload: { message: string };
}

export interface CompleteNewPasswordSubmitAction extends Action {
  type: 'COMPLETE_NEW_PASSWORD_SUBMIT';
  payload: { user: any; password: string; navigation: any };
}
export interface CompleteNewPasswordSubmitSuccessAction extends Action {
  type: 'COMPLETE_NEW_PASSWORD_SUBMIT_SUCCESS';
}
export interface CompleteNewPasswordSubmitErrorAction extends Action {
  type: 'COMPLETE_NEW_PASSWORD_SUBMIT_ERROR';
  payload: { message: string };
}

export interface UpdateUserAction extends Action {
  type: 'UPDATE_USER';
  payload: any;
}

export type AuthAction =
  | LoginUserAction
  | LoginUserSuccessAction
  | LoginUserErrorAction
  | ResetMessageAction
  | RegisterUserAction
  | RegisterUserSuccessAction
  | RegisterUserErrorAction
  | ConfirmRegisterUserAction
  | ConfirmRegisterUserSuccessAction
  | ConfirmRegisterUserErrorAction
  | LogoutUserAction
  | LogoutUserSuccessAction
  | LogoutUserErrorAction
  | ResendConfirmationCodeAction
  | ResendConfirmationCodeSuccessAction
  | ResendConfirmationCodeErrorAction
  | ForgotPasswordAction
  | ForgotPasswordSuccessAction
  | ForgotPasswordErrorAction
  | ForgotPasswordSubmitAction
  | ForgotPasswordSubmitSuccessAction
  | ForgotPasswordSubmitErrorAction
  | CompleteNewPasswordAction
  | CompleteNewPasswordSuccessAction
  | CompleteNewPasswordErrorAction
  | CompleteNewPasswordSubmitAction
  | CompleteNewPasswordSubmitSuccessAction
  | CompleteNewPasswordSubmitErrorAction
  | UpdateUserAction;

export const loginUser: ActionCreator<LoginUserAction> = (
  user,
  navigation,
  confirmInvitation,
  invitationEmail,
  nodeId,
  token,
) => ({
  type: LOGIN_USER,
  payload: {
    user,
    navigation,
    confirmInvitation,
    invitationEmail,
    nodeId,
    token,
  },
});
export const loginUserSuccess: ActionCreator<LoginUserSuccessAction> = (
  user,
) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});
export const loginUserError: ActionCreator<LoginUserErrorAction> = (
  message,
) => ({
  type: LOGIN_USER_ERROR,
  payload: { message },
});
export const resetMessage: ActionCreator<ResetMessageAction> = () => ({
  type: RESET_MESSAGE,
});

export const registerUser: ActionCreator<RegisterUserAction> = (
  user,
  navigation,
  params,
) => ({
  type: REGISTER_USER,
  payload: { user, navigation, params },
});
export const registerUserSuccess: ActionCreator<RegisterUserSuccessAction> = (
  user,
) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user,
});
export const registerUserError: ActionCreator<RegisterUserErrorAction> = (
  message,
) => ({
  type: REGISTER_USER_ERROR,
  payload: { message },
});

export const confirmRegisterUser: ActionCreator<ConfirmRegisterUserAction> = (
  user,
  navigation,
  params,
) => ({
  type: CONFIRM_REGISTER_USER,
  payload: { user, navigation, params },
});
export const confirmRegisterUserSuccess: ActionCreator<ConfirmRegisterUserSuccessAction> = (
  user,
) => ({
  type: CONFIRM_REGISTER_USER_SUCCESS,
  payload: user,
});
export const confirmRegisterUserError: ActionCreator<ConfirmRegisterUserErrorAction> = (
  message,
) => ({
  type: CONFIRM_REGISTER_USER_ERROR,
  payload: { message },
});

export const logoutUser: ActionCreator<LogoutUserAction> = (navigation) => ({
  type: LOGOUT_USER,
  payload: { navigation },
});
export const logoutUserSuccess: ActionCreator<LogoutUserSuccessAction> = () => ({
  type: LOGOUT_USER_SUCCESS,
});
export const logoutUserError: ActionCreator<LogoutUserErrorAction> = (
  message,
) => ({
  type: LOGOUT_USER_ERROR,
  payload: { message },
});

export const resendConfirmationCode: ActionCreator<ResendConfirmationCodeAction> = (
  username,
) => ({
  type: RESEND_CONFIRMATION_CODE,
  payload: { username },
});
export const resendConfirmationCodeSuccess: ActionCreator<ResendConfirmationCodeSuccessAction> = () => ({
  type: RESEND_CONFIRMATION_CODE_SUCCESS,
});
export const resendConfirmationCodeError: ActionCreator<ResendConfirmationCodeErrorAction> = (
  message,
) => ({
  type: RESEND_CONFIRMATION_CODE_ERROR,
  payload: { message },
});

export const forgotPassword: ActionCreator<ForgotPasswordAction> = (
  username,
  navigation,
) => ({
  type: FORGOT_PASSWORD,
  payload: { username, navigation },
});
export const forgotPasswordSuccess: ActionCreator<ForgotPasswordSuccessAction> = (
  username,
) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: { username },
});
export const forgotPasswordError: ActionCreator<ForgotPasswordErrorAction> = (
  message,
) => ({
  type: FORGOT_PASSWORD_ERROR,
  payload: { message },
});

export const forgotPasswordSubmit: ActionCreator<ForgotPasswordSubmitAction> = (
  username,
  code,
  password,
  navigation,
) => ({
  type: FORGOT_PASSWORD_SUBMIT,
  payload: { username, code, password, navigation },
});
export const forgotPasswordSubmitSuccess: ActionCreator<ForgotPasswordSubmitSuccessAction> = () => ({
  type: FORGOT_PASSWORD_SUBMIT_SUCCESS,
});
export const forgotPasswordSubmitError: ActionCreator<ForgotPasswordSubmitErrorAction> = (
  message,
) => ({
  type: FORGOT_PASSWORD_SUBMIT_ERROR,
  payload: { message },
});

export const completeNewPassword: ActionCreator<CompleteNewPasswordAction> = (
  user,
) => ({
  type: COMPLETE_NEW_PASSWORD,
  payload: { user },
});
export const completeNewPasswordSuccess: ActionCreator<CompleteNewPasswordSuccessAction> = () => ({
  type: COMPLETE_NEW_PASSWORD_SUCCESS,
});
export const completeNewPasswordError: ActionCreator<CompleteNewPasswordErrorAction> = (
  message,
) => ({
  type: COMPLETE_NEW_PASSWORD_ERROR,
  payload: { message },
});

export const completeNewPasswordSubmit: ActionCreator<CompleteNewPasswordSubmitAction> = (
  user,
  password,
  navigation,
) => ({
  type: COMPLETE_NEW_PASSWORD_SUBMIT,
  payload: { user, password, navigation },
});
export const completeNewPasswordSubmitSuccess: ActionCreator<CompleteNewPasswordSubmitSuccessAction> = () => ({
  type: COMPLETE_NEW_PASSWORD_SUBMIT_SUCCESS,
});
export const completeNewPasswordSubmitError: ActionCreator<CompleteNewPasswordSubmitErrorAction> = (
  message,
) => ({
  type: COMPLETE_NEW_PASSWORD_SUBMIT_ERROR,
  payload: { message },
});

export const updateUser: ActionCreator<UpdateUserAction> = (user) => ({
  type: UPDATE_USER,
  payload: user,
});
