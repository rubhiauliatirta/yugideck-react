import { USER_LOGIN, USER_LOGOUT } from "./keys";
import firebaseAuth from 'config/firebaseAuth'
import { showError, showSuccess } from 'config/swal'

export function login(user){
  showSuccess(`Welcome, ${user.displayName}!`)

  let { displayName, photoURL, uid, email } = user
  return {
    type : USER_LOGIN,
    payload : { displayName, photoURL, uid, email },
  }
}

export function logout(){
  return (dispatch, getState) => {
    firebaseAuth.signOut()
    .catch(err => {
      showError(err.message)
    })

    dispatch({
      type : USER_LOGOUT
    })
  }
  
}