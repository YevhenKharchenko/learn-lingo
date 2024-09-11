import { ref, push } from 'firebase/database';
import { database } from './firebase.js';
import { emailToLowerCase } from '../utils/firstLetterToLowerCase.js';

export const createUserFirebase = async (name, email) => {
  try {
    const usersRef = ref(database, 'users');
    const lowerCaseEmail = emailToLowerCase(email);
    const newUser = {
      name,
      email: lowerCaseEmail,
      favorites: [],
    };
    const newUserRef = await push(usersRef, newUser);

    return { id: newUserRef.key, ...newUser };
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
