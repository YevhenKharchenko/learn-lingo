import { ref, push } from 'firebase/database';
import { database } from './firebase.js';

export const createUserFirebase = async (name, email) => {
  try {
    const usersRef = ref(database, 'users');
    const newUser = {
      name,
      email,
      favorites: [],
    };
    const newUserRef = await push(usersRef, newUser);

    return { id: newUserRef.key, ...newUser };
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
