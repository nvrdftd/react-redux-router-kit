import dummyApi from '../dummyApi'
import { REQUEST_GREETINGS, RECEIVE_GREETINGS } from './actionTypes'

export const requestGreetings = () => ({
  type: REQUEST_GREETINGS,
  greetings
})

export const receiveGreetings = (greetings) => ({
  type: REQUEST_GREETINGS,
  greetings
})


export const fetchGreetings = () => dispatch => {
  dispatch(requestGreetings())
  return dummyApi()
    .then(res => dispatch(receiveGreetings(res)))
}
