import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import './index.scss'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'

window.requestAnimFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

const store = configureStore()

render(<Root store={store} />, document.getElementById('root'))

registerServiceWorker()
