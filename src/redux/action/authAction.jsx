export const SHOW_LOGIN_MODAL = 'SHOW_LOGIN_MODAL'
export const HIDE_LOGIN_MODAL = 'HIDE_LOGIN_MODAL'
export const SHOW_SIGNUP_MODAL = 'SHOW_SIGNUP_MODAL'
export const HIDE_SIGNUP_MODAL = 'HIDE_SIGNUP_MODAL'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const START_LOADER = 'START_LOADER';
export const STOP_LOADER = 'STOP_LOADER';


export const showLoginModal = () => ({ type: SHOW_LOGIN_MODAL })
export const hideLoginModal = () => ({ type: HIDE_LOGIN_MODAL })
export const showSignupModal = () => ({ type: SHOW_SIGNUP_MODAL })
export const hideSignupModal = () => ({ type: HIDE_SIGNUP_MODAL })
export const loginRequest = (credentials) => ({ type: LOGIN_REQUEST, payload: credentials })
export const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user })
export const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error })
export const signupRequest = (credentials) => ({ type: SIGNUP_REQUEST, payload: credentials });
export const signupSuccess = (user) => ({ type: SIGNUP_SUCCESS, payload: user });
export const signupFailure = (error) => ({ type: SIGNUP_FAILURE, payload: error });
export const startLoader = () => ({ type: START_LOADER });
export const stopLoader = () => ({ type: STOP_LOADER });
