import { combineReducers } from 'redux';
import game from './game';
import routes from './routes';
import quests from './quests';

export default combineReducers({ routes, game, quests });
