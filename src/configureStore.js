import { createStore, applyMiddleware } from 'redux'
import allReducers from './reducers'
import thunk from 'redux-thunk'

export default (initState) => {
  const store = createStore(allReducers, initState, applyMiddleware(thunk))
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextAllReducer = require('./reducers').default
      store.replaceReducer(nextAllReducer)
    });
  }
  return store
}
