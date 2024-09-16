import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

export const loginFirebase = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  return user;
};
