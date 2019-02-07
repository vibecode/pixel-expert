import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  authDomain: 'pixel-expert.firebaseapp.com',
  databaseURL: 'https://pixel-expert.firebaseio.com',
  projectId: 'pixel-expert',
  storageBucket: 'pixel-expert.appspot.com'
}

export default firebase.initializeApp(firebaseConfig)
