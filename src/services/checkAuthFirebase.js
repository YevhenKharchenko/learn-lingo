import { auth } from './firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

export const checkAuthFirebase = () => {
  onAuthStateChanged(auth);
};
