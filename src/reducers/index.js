import { combineReducers } from 'redux'
import game from './game'
import quests from './quests'
import finalStats from './finalStats'

export default combineReducers({ game, quests, finalStats })
