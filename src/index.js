import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import './styles/index.css';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
console.log(store.getState());
render(
    <Root store={store} />,
    document.getElementById('root')
);

registerServiceWorker();
