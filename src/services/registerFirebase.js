import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebase.js';

export const registerFirebase = async (email, password, displayName) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await updateProfile(user, { displayName });

  return user;
};
