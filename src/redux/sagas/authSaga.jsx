import { put, takeEvery, call } from "redux-saga/effects";
import { SIGNUP_REQUEST, signupSuccess, signupFailure } from "../action/authAction";

// const apiSignup = async (credentials) => {
//     return{
//         id: Date.now(),
//         username: credentials.username,
//         email: credentials.email,
//         phone: credentials.phone,
//         dob: credentials.dob
//     }
// }

// function* handleSignup(action){
//     try{
//         const user = yield call(apiSignup, action.payload)
//         yield put(signupSuccess(user))
//     }
//     catch(error) {
//         yield put(signupFailure(error.message))
//     }
// }

// export default function* watchSignup() {
//     yield takeEvery(SIGNUP_REQUEST, handleSignup);  
// }