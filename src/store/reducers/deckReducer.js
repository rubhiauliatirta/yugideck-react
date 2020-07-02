import { SET_SELECTED_DECK } from "../actions/keys";
const initialState = {
  id : null,
  name : null
}

export default (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case SET_SELECTED_DECK:
      return {...state, id : payload.id, name : payload.name}
    default:
      return state
  }
}