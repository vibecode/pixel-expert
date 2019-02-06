import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import AnimatedBg from './AnimatedBg'

const Root = ({ store }) => (
  <Provider store={store}>
    <AnimatedBg />
    <App />
  </Provider>
)

export default Root
