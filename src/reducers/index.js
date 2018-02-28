import { combineReducers } from 'redux';
import gameReducer from './game';
import nationReducer from './nation';
import playerReducer from './player';

export default combineReducers({
    game: gameReducer,
    nations: nationReducer,
    players: playerReducer
});
