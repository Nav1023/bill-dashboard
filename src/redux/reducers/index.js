import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import BillReducer from './BillReducer'


const rootReducer = combineReducers({
  AppState : AppReducer,
  BillState : BillReducer
});

export default rootReducer;