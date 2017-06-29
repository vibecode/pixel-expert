import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './styles/index.css';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './store/localStorage';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore(loadState());

store.subscribe(throttle(() => {
  saveState({
    finalStats: store.getState().finalStats
  })
}, 1000));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
