import { combineReducers } from 'redux';
import game from './game';
import routes from './routes';
import quests from './quests';
import finalStats from './finalStats';

export default combineReducers({ routes, game, quests, finalStats });
