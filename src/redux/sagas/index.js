import { all } from 'redux-saga/effects';
import exampleSaga from './exampleSaga'; // Example Saga
import watchSignup from './authSaga';



export default function* rootSaga() {
  yield all([
    exampleSaga(),
    // watchSignup(),
  ]);
}