import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  data: categoryReducer,
  // Add other reducers here if needed
});

export default rootReducer;