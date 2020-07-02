import { USER_LOGIN, USER_LOGOUT } from "../actions/keys";
const initialState = {
  data : null,
}

export default (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case USER_LOGIN:
      return {...state, data : payload}
    case USER_LOGOUT: 
      return {...state, data : null}
    default:
      return state
  }
}