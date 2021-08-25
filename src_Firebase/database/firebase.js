import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB0087xbUJgAxLRDlu_VIPObvcnAr0yBfU',
  authDomain: 'clonewa-ff96b.firebaseapp.com',
  databaseURL: 'https://clonewa-ff96b-default-rtdb.firebaseio.com',
  projectId: 'clonewa-ff96b',
  storageBucket: 'clonewa-ff96b.appspot.com',
  messagingSenderId: '909283010164',
  appId: '1:909283010164:web:502d0990e0e68461299321',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
