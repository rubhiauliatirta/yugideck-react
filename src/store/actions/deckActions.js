import { SET_SELECTED_DECK } from "./keys"

export function setSelectedDeck(deck){
  return {
    type : SET_SELECTED_DECK,
    payload : deck
  }
}