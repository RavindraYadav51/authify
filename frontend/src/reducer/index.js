import profileReducer from '../slices/profileSlice';
import editReducer from '../slices/editSlice';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    profile: profileReducer,
    edit: editReducer,
});
export default rootReducer;