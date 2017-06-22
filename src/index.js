import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './styles/index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
