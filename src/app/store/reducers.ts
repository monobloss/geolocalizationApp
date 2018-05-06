import { combineReducers } from 'redux';
import { GlobalReducer } from './global/globalReducer';
export const rootReducer = combineReducers({
  globalState: GlobalReducer,
});
