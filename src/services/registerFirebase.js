import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebase.js';

export const registerFirebase = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName });

    return user;
  } catch (error) {
    console.error('Error during user registration or profile update:', error);
    throw error;
  }
};
