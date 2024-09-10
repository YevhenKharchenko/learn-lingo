import { signOut } from 'firebase/auth';
import { auth } from './firebase.js';

export const logoutFirebase = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error during user logout:', error);
    throw error;
  }
};
