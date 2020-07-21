import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCj7ZTT6Ovdl8t7sP0Hy_zbha7CIziQ3tk',
  authDomain: 'wallaclone-281617.firebaseapp.com',
  databaseURL: 'https://wallaclone-281617.firebaseio.com',
  projectId: 'wallaclone-281617',
  storageBucket: 'wallaclone-281617.appspot.com',
  messagingSenderId: '714174297993',
  appId: '1:714174297993:web:99388c7cf09bc47d31d358',
  measurementId: 'G-2WHFZXYMMP',
};
firebase.initializeApp(firebaseConfig);
export default firebase;
