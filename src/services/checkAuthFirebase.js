import { auth } from './firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

export const checkAuthFirebase = () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('logged in');
    } else {
      console.log('logged out');
    }
  });
};
