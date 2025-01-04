import { takeEvery, put, call } from 'redux-saga/effects';
import { startLoader, stopLoader } from '../action/authAction';
export const FETCH_DATA = "FETCH_DATA"
// Example API Call
const fetchData = () =>
  fetch('https://dummyjson.com/products').then((response) =>
    response.json()
  );

// Worker Saga
function* fetchExampleData() {
  try {
    yield put (startLoader())
    const data = yield call(fetchData);
    // console.log(data?.products,"data inside fetch call")
    yield put({ type: 'SET_DATA', payload: data?.products });
    yield put (stopLoader())

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Watcher Saga
export default function* exampleSaga() {
  yield takeEvery(FETCH_DATA, fetchExampleData);

}
