import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

let store = configureStore()

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Link to='/'>Home</Link>
        <br />
        <Link to='/about'>About</Link>
      </div>
    </Router>
  </Provider>
)

export default App;
