import { ADD_YUGIOH_CARDS, SET_YUGIOH_LOADING, SET_DETAIL_ID } from "../actions/keys";
const initialState = {
  isLoading: false,
  cards: [],
  url: "https://db.ygoprodeck.com/api/v7/cardinfo.php?&sort=new&num=30&offset=0&view=List",
  detailId: null,
}

export default (state = initialState, action) => {
  const { type, cards, url, payload } = action

  switch (type) {
    case ADD_YUGIOH_CARDS:
      return { ...state, cards: state.cards.concat(cards), url }
    case SET_YUGIOH_LOADING:
      return { ...state, isLoading: payload }
    case SET_DETAIL_ID:
      return { ...state, detailId: payload }
    default:
      return state
  }
}