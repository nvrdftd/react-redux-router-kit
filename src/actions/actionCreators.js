import dummyApi from '../dummyApi'
import { REQUEST_GREETINGS, RECEIVE_GREETINGS } from './actionTypes'

export const requestGreetings = () => ({
  type: REQUEST_GREETINGS,
})

export const receiveGreetings = (msg) => ({
  type: RECEIVE_GREETINGS,
  msg
})


export const fetchGreetings = () => (dispatch) => {
  dispatch(requestGreetings())
  return dummyApi()
    .then(res => dispatch(receiveGreetings(res.msg)))
}
