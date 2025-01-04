import { SHOW_LOGIN_MODAL, HIDE_LOGIN_MODAL, SHOW_SIGNUP_MODAL, HIDE_SIGNUP_MODAL, LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_SUCCESS, SIGNUP_FAILURE, START_LOADER, STOP_LOADER, showLoginModal } from "../action/authAction";

const initialState = {
    showLoginModal: false,
    showSignupModal: false,
    user: [],
    curr_user: {},
    error: null,
    loader: false,


}


const authReducer = ( state = initialState, action ) => {
    switch (action.type){
        case SHOW_LOGIN_MODAL:
            // console.log('SHOW_LOGIN_MODAL action triggered');
            return{ ...state, showLoginModal: true, showSignupModal: false }
        case HIDE_LOGIN_MODAL:
            return{ ...state, showLoginModal: false }
        case SHOW_SIGNUP_MODAL:
            // console.log('SHOW_SIGNUP_MODAL action triggered');
            return{ ...state, showSignupModal: true, showLoginModal: false }
        case HIDE_SIGNUP_MODAL:
            // console.log('HIDE_SIGNUP_MODAL action triggered');
            return{ ...state, showSignupModal: false }
        case LOGIN_SUCCESS:
            return{ ...state, user: action.payload, showLoginModal: false}
        case SIGNUP_SUCCESS:
            // return{ ...state, user: action.payload, error: null, showModal: null}
            return{ ...state, user: [...initialState.user,action.payload], showSignupModal: false, showLoginModal: true}

        case LOGIN_FAILURE:
            return{ ...state, error: action.payload }
        case SIGNUP_FAILURE:
            return{ ...state, error: action.payload }
        case START_LOADER:
            return{ ...state, loader: true }
        case STOP_LOADER:
            return{ ...state, loader: false }
        default:
            return state
    }
}


export default authReducer;