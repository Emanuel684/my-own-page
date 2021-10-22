/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */

import { all, call, put, takeEvery, fork } from 'redux-saga/effects';

import { API, Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import {
  LOGIN_USER,
  REGISTER_USER,
  CONFIRM_REGISTER_USER,
  LOGOUT_USER,
  RESEND_CONFIRMATION_CODE,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUBMIT,
  COMPLETE_NEW_PASSWORD_SUBMIT,
} from '../actions';

import {
  loginUserSuccess,
  loginUserError,
  loginUser,
  registerUserError,
  registerUserSuccess,
  confirmRegisterUserError,
  confirmRegisterUserSuccess,
  logoutUserSuccess,
  logoutUserError,
  resendConfirmationCodeError,
  resendConfirmationCodeSuccess,
  forgotPasswordError,
  forgotPasswordSubmitError,
  forgotPasswordSubmitSuccess,
  forgotPasswordSuccess,
  completeNewPassword,
  completeNewPasswordSubmitError,
  completeNewPasswordSubmitSuccess,
} from './actions';
import { persistor } from '../store';

const dataStoreClearAsync = async () => {
  try {
    return await DataStore.clear();
  } catch (error) {
    return error;
  }
};
const dataStoreStartAsync = async () => {
  try {
    DataStore.start();
  } catch (error) {
    return error;
  }
};

const loginUserAsync = async (
  username: string,
  password: string,
  confirmInvitation: any,
  invitationEmail: any,
  nodeId: any,
  token: any,
) => {
  const sendConfirmation = async (requestId: string) => {
    const apiName = 'ciclo';
    const path = '/confirmInvitation';
    const myInit = {
      queryStringParameters: {
        requestId: requestId,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    return await API.get(apiName, path, myInit);
  };
  try {
    const session = await Auth.signIn(username, password);
    if (confirmInvitation && invitationEmail === username)
      sendConfirmation(confirmInvitation);
    return session;
  } catch (error) {
    return error;
  }
};

function* loginUserF({ payload }: any) {
  const {
    user: {
      username,
      password,
      navigation,
      confirmInvitation,
      invitationEmail,
      nodeId,
      token,
    },
  } = payload;
  try {
    const loginUserStatus = yield call(
      loginUserAsync,
      username,
      password,
      confirmInvitation,
      invitationEmail,
      nodeId,
      token,
    );
    if (loginUserStatus.challengeName === 'NEW_PASSWORD_REQUIRED') {
      yield put(completeNewPassword(loginUserStatus));
      navigation.navigate('new-password');
    } else if (!loginUserStatus.message) {
      const user = loginUserStatus.attributes;
      const groups =
        loginUserStatus.signInUserSession.accessToken.payload['cognito:groups'];

      yield put(
        loginUserSuccess({
          email: user.email,
          sub: user.sub,
          groups,
          currentProfile: user.currentProfile,
        }),
      );
      navigation.navigate('App');
      yield call(dataStoreClearAsync);
      yield call(dataStoreStartAsync);
    } else {
      yield put(loginUserError(loginUserStatus.message));
    }
  } catch (error) {
    yield put(loginUserError(error));
  }
}
const registerUserAsync = async (
  name: string,
  email: string,
  password: string,
  mobilePhone: string,
  personalId: string,
  idType: string,
) => {
  try {
    const ans = await Auth.signUp({
      username: email,
      password,
      attributes: {
        name,
        email,
        phone_number: mobilePhone,
        nickname: personalId,
        preferred_username: idType,
      },
    });
    return ans;
  } catch (error) {
    return error;
  }
};

function* registerUser({ payload }: any) {
  const {
    user: { name, email, password, mobilePhone, personalId, idType },
    navigation,
    params,
  } = payload;
  try {
    const registerUserStatus = yield call(
      registerUserAsync,
      name,
      email,
      password,
      mobilePhone,
      personalId,
      idType,
    );
    if (!registerUserStatus.message) {
      yield put(registerUserSuccess({ email }));
      if (registerUserStatus.user.authenticationFlowType === 'USER_SRP_AUTH') {
        navigation.navigate('register', { ...params, confirm: true });
      }
    } else {
      yield put(registerUserError(registerUserStatus.message));
    }
  } catch (error) {
    yield put(registerUserError(error));
  }
}

const confirmRegisterUserAsync = async (email: string, code: string) => {
  try {
    const ans = await Auth.confirmSignUp(email, code);
    return ans;
  } catch (error) {
    return error;
  }
};

function* confirmRegisterUser({ payload }: any) {
  const {
    user: { email, code, password },
    navigation,
    params,
  } = payload;
  try {
    const confirmRegisterUserStatus = yield call(
      confirmRegisterUserAsync,
      email,
      code,
    );
    if (!confirmRegisterUserStatus.message) {
      yield put(confirmRegisterUserSuccess({ email }));
      if (confirmRegisterUserStatus === 'SUCCESS') {
        // navigation.navigate('LoginScreen', params);
        yield put(
          loginUser({
            username: email,
            password: password,
            navigation: navigation,
            confirmInvitation: params?.requestId,
            invitationEmail: params?.invitationEmail,
            nodeId: params?.nodeId,
            token: params?.token,
            userId: params?.userId,
          }),
        );
      }
    } else {
      yield put(confirmRegisterUserError(confirmRegisterUserStatus.message));
    }
  } catch (error) {
    yield put(confirmRegisterUserError(error));
  }
}

const logoutUserAsync = async () => {
  try {
    return await Auth.signOut({ global: true });
  } catch (error) {
    return error;
  }
};

function* logoutUser({ payload }: any) {
  const { navigation } = payload;
  try {
    const logoutUserStatus = yield call(logoutUserAsync);
    if (!logoutUserStatus) {
      yield put(logoutUserSuccess());
      yield call(dataStoreClearAsync);
      yield call(() => {
        // if ('caches' in window) {
        //   caches.keys().then((names) => {
        //     // Delete all the cache files
        //     names.forEach((name) => {
        //       caches.delete(name);
        //     });
        //   });
        //   // Makes sure the page reloads. Changes are only visible after you refresh.
        //   persistor.flush().then(() => {
        //     persistor.purge().then(() => {
        //       window.location.reload(true);
        //     });
        //   });
        // }
        navigation.navigate('Auth');
      });
    } else {
      yield put(logoutUserError(logoutUserStatus.message));
    }
  } catch (error) {
    yield put(logoutUserError(error));
  }
}

const resendConfirmationCodeAsync = async (username: string) => {
  try {
    return await Auth.resendSignUp(username);
  } catch (error) {
    return error;
  }
};

function* resendConfirmationCode({ payload }: any) {
  const { username } = payload;
  try {
    const resendConfirmationCodeStatus = yield call(
      resendConfirmationCodeAsync,
      username,
    );
    if (!resendConfirmationCodeStatus.message) {
      yield put(resendConfirmationCodeSuccess());
    } else {
      yield put(
        resendConfirmationCodeError(resendConfirmationCodeStatus.message),
      );
    }
  } catch (error) {
    yield put(resendConfirmationCodeError(error));
  }
}

const forgotPasswordAsync = async (username: string) => {
  try {
    return await Auth.forgotPassword(username);
  } catch (error) {
    return error;
  }
};

function* forgotPassword({ payload }: any) {
  const { username, navigation } = payload;
  try {
    const forgotPasswordStatus = yield call(forgotPasswordAsync, username);

    if (!forgotPasswordStatus.message) {
      yield put(forgotPasswordSuccess(username));
      navigation.navigate('forgot-password-submit');
    } else {
      yield put(forgotPasswordError(forgotPasswordStatus.message));
    }
  } catch (error) {
    yield put(forgotPasswordError(error));
  }
}

const forgotPasswordSubmitAsync = async (
  username: string,
  code: string,
  new_password: string,
) => {
  try {
    return await Auth.forgotPasswordSubmit(username, code, new_password);
  } catch (error) {
    return error;
  }
};

function* forgotPasswordSubmit({ payload }: any) {
  const { username, code, password, navigation } = payload;
  try {
    const forgotPasswordSubmitStatus = yield call(
      forgotPasswordSubmitAsync,
      username,
      code,
      password,
    );
    if (!forgotPasswordSubmitStatus) {
      yield put(forgotPasswordSubmitSuccess());
      navigation.navigate('LoginScreen');
    } else {
      yield put(forgotPasswordSubmitError(forgotPasswordSubmitStatus.message));
    }
  } catch (error) {
    yield put(forgotPasswordSubmitError(error));
  }
}

const completeNewPasswordSubmitAsync = async (
  user: any,
  newPassword: string,
) => {
  try {
    return await Auth.completeNewPassword(
      user, // the Cognito User Object
      newPassword, // the new password
      // OPTIONAL, the required attributes
    );
  } catch (error) {
    return error;
  }
};

function* completeNewPasswordSubmit({ payload }: any) {
  const { user, password, navigation } = payload;
  try {
    const completeNewPasswordSubmitStatus = yield call(
      completeNewPasswordSubmitAsync,
      user,
      password,
    );
    if (!completeNewPasswordSubmitStatus.message) {
      yield put(completeNewPasswordSubmitSuccess());
      navigation.navigate('LoginScreen');
    } else {
      yield put(
        completeNewPasswordSubmitError(completeNewPasswordSubmitStatus.message),
      );
    }
  } catch (error) {
    yield put(completeNewPasswordSubmitError(error));
  }
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginUserF);
}
export function* watchRegisterUser() {
  yield takeEvery(REGISTER_USER, registerUser);
}
export function* watchConfirmRegisterUser() {
  yield takeEvery(CONFIRM_REGISTER_USER, confirmRegisterUser);
}
export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logoutUser);
}
export function* watchResendConfirmationCode() {
  yield takeEvery(RESEND_CONFIRMATION_CODE, resendConfirmationCode);
}
export function* watchForgotPassword() {
  yield takeEvery(FORGOT_PASSWORD, forgotPassword);
}
export function* watchForgotPasswordSubmit() {
  yield takeEvery(FORGOT_PASSWORD_SUBMIT, forgotPasswordSubmit);
}
export function* watchCompleteNewPasswordSubmit() {
  yield takeEvery(COMPLETE_NEW_PASSWORD_SUBMIT, completeNewPasswordSubmit);
}

export default function* rootSaga() {
  yield all([fork(watchLoginUser)]);
  yield all([fork(watchRegisterUser)]);
  yield all([fork(watchConfirmRegisterUser)]);
  yield all([fork(watchLogoutUser)]);
  yield all([fork(watchResendConfirmationCode)]);
  yield all([fork(watchForgotPassword)]);
  yield all([fork(watchForgotPasswordSubmit)]);
  yield all([fork(watchCompleteNewPasswordSubmit)]);
}
