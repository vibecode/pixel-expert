import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const persistedState = loadState();

  const store = createStore(
      rootReducer,
      persistedState,
      composeEnhancers(applyMiddleware(thunk))
  );

  store.subscribe(throttle(() => {
    saveState({
      finalStats: store.getState().finalStats
    })
  }, 1000));

  return store;
}
