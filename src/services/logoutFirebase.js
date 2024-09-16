import { signOut } from 'firebase/auth';
import { auth } from './firebase.js';

export const logoutFirebase = async () => {
  await signOut(auth);
};
