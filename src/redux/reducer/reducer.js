import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer'; // Example Reducer
import authReducer from './authReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  auth: authReducer,
  cart: cartReducer,
});

export default rootReducer;