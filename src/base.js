import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAqft_xX_MyF1AQK5M8i8Vjn2KyuHW7wEE",
    authDomain: "devplenoreactcomments.firebaseapp.com",
    databaseURL: "https://devplenoreactcomments.firebaseio.com",
    projectId: "devplenoreactcomments",
    storageBucket: "",
    messagingSenderId: "727621335117"
  })
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base