import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './containers/Home'

let store = configureStore()

const App = () => (
  <Provider store={store}>
    <Router>
      <Home />
    </Router>
  </Provider>
)

export default App;
