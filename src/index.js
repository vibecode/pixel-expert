import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import './styles/index.scss'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'pixel-expert.firebaseapp.com',
  databaseURL: 'https://pixel-expert.firebaseio.com',
  projectId: 'pixel-expert',
  storageBucket: 'pixel-expert.appspot.com'
}

firebase.initializeApp(firebaseConfig)

const store = configureStore()

render(<Root store={store} />, document.getElementById('root'))

registerServiceWorker()
