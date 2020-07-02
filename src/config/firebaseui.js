import firebase from "./firebase"

let uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    {
      provider : firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID
  ],
  callbacks : {
    signInSuccessWithAuthResult: function() {
      return false;
    },
  },
  credentialHelper : "none"
};

export default uiConfig