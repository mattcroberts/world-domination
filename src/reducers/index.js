import { combineReducers } from 'redux';
import nationReducer from './nation';

export default combineReducers({
    nations: nationReducer
});
