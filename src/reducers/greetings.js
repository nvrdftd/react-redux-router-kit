import { REQUEST_GREETINGS, RECEIVE_GREETINGS } from '../actions/actionTypes';

export default (state = {
  isFetching: false,
  msg: ''
}, action) => {
  switch (action.type) {
    case REQUEST_GREETINGS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_GREETINGS:
      return {
        ...state,
        isFetching: false,
        msg: action.msg
      }
    default:
      return state
  }
}
