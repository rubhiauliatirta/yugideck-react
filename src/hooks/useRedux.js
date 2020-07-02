import { useDispatch, useSelector } from 'react-redux'

export default function useRedux(){

  const yugioh = useSelector(state => state.yugioh)
  const user = useSelector(state => state.user)
  const deck = useSelector(state => state.deck)
  const dispatch = useDispatch()

  return {
    yugioh,
    user,
    deck,
    dispatch,
  }
}