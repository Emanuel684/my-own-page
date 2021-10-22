import { Reducer } from 'redux';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  RESET_MESSAGE,
  REGISTER_USER,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  CONFIRM_REGISTER_USER,
  CONFIRM_REGISTER_USER_ERROR,
  CONFIRM_REGISTER_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_ERROR,
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
import { AuthAction, User } from './actions';

export interface AuthState {
  readonly isLogged: boolean;
  readonly user: User;
  readonly loading: boolean;
  readonly error: boolean;
  readonly message: string;
}

export const INIT_AUTH_STATE = {
  isLogged: false,
  user: {
    email: '',
    sub: '',
    groups: [''],
    currentProfile: '',
  },
  loading: false,
  error: false,
  message: '',
};

export const AuthReducer: Reducer<AuthState, AuthAction> = (
  state = INIT_AUTH_STATE,
  action: AuthAction,
) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: false, message: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogged: true,
        user: action.payload,
        error: false,
        message: '',
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: {
          email: '',
          sub: '',
          groups: [''],
          currentProfile: '',
        },
        error: true,
        message: action.payload.message,
      };
    case RESET_MESSAGE:
      return { ...state, error: false, message: '' };

    case REGISTER_USER:
      return { ...state, loading: true, error: false, message: '' };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: false,
        message: '',
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: {
          email: '',
          sub: '',
          groups: [''],
          currentProfile: '',
        },
        error: true,
        message: action.payload.message,
      };

    case CONFIRM_REGISTER_USER:
      return { ...state, loading: true, error: false, message: '' };
    case CONFIRM_REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: false,
        message: '',
      };
    case CONFIRM_REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: {
          email: '',
          sub: '',
          groups: [''],
          currentProfile: '',
        },
        error: true,
        message: action.payload.message,
      };

    case LOGOUT_USER:
      return {
        ...state,
        loading: true,
        isLogged: false,
        user: {
          email: '',
          sub: '',
          groups: [''],
          currentProfile: '',
        },
        error: false,
        message: '',
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        message: '',
      };
    case LOGOUT_USER_ERROR:
      return {
        ...state,
        loading: false,
        user: {
          email: '',
          sub: '',
          groups: [''],
          currentProfile: '',
        },
        error: true,
        message: action.payload.message,
      };

    case RESEND_CONFIRMATION_CODE:
      return {
        ...state,
        loading: false,
        isLogged: false,
        error: false,
        message: '',
      };
    case RESEND_CONFIRMATION_CODE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        message: 'Your code was successfully sent.',
      };
    case RESEND_CONFIRMATION_CODE_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.message,
      };

    case FORGOT_PASSWORD:
      return {
        ...state,
        loading: true,
        isLogged: false,
        error: false,
        message: '',
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        message: 'Your code was successfully sent.',
        user: {
          email: action.payload.username,
          sub: '',
          groups: [''],
          currentProfile: '',
        },
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.message,
      };

    case FORGOT_PASSWORD_SUBMIT:
      return {
        ...state,
        loading: true,
        isLogged: false,
        error: false,
        message: '',
      };
    case FORGOT_PASSWORD_SUBMIT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        message: 'Your password has been successfully changed.',
      };
    case FORGOT_PASSWORD_SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.message,
      };

    case COMPLETE_NEW_PASSWORD:
      return {
        ...state,
        loading: false,
        isLogged: false,
        error: false,
        message: '',
        user: action.payload.user,
      };
    case COMPLETE_NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        message: 'Your password has been successfully changed.',
      };
    case COMPLETE_NEW_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.message,
      };

    case COMPLETE_NEW_PASSWORD_SUBMIT:
      return {
        ...state,
        loading: true,
        isLogged: false,
        error: false,
        message: '',
      };
    case COMPLETE_NEW_PASSWORD_SUBMIT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        message: 'Your password has been successfully changed.',
      };
    case COMPLETE_NEW_PASSWORD_SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.message,
      };

    case UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };

    default:
      return { ...state };
  }
};
