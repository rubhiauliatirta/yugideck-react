import firebase from './firebase'
//firebase.functions().useFunctionsEmulator('http://localhost:5001')

export const addCardFunction =  firebase.functions().httpsCallable('addCard')