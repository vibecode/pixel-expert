import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import './index.scss'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()

render(<Root store={store} />, document.getElementById('root'))

registerServiceWorker()
