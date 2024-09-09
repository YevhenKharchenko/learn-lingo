import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDq3Z5EA5tm2uAwOnBTbD5Ne7C9upDaJbk',
  authDomain: 'learn-lingo-5d889.firebaseapp.com',
  projectId: 'learn-lingo-5d889',
  storageBucket: 'learn-lingo-5d889.appspot.com',
  messagingSenderId: '961499292592',
  appId: '1:961499292592:web:5e5b0684e0d08959292c75',
  databaseURL: 'https://learn-lingo-5d889-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
