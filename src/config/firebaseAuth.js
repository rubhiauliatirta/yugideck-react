import store from 'store'
import firebase from './firebase'
import {
  login,
  logout
} from 'store/actions/userActions'

firebase.auth().onAuthStateChanged(user => { 
  user ? store.dispatch(login(user)) : store.dispatch(logout())
})

export default firebase.auth()