import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loadingReducer from './loading/loadingReducer';

const rootReducer = combineReducers({
  form: formReducer,
  loading: loadingReducer
});

export default rootReducer;