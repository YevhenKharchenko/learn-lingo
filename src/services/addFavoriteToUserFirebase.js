import { ref, push, query, get, orderByChild, equalTo } from 'firebase/database';
import { database } from './firebase.js';

export const addFavoriteToUserFirebase = async (email, favoriteData) => {
  // try {
  //   console.log(userId, favoriteData);

  //   const favoritesRef = ref(database, `users/${userId}/favorites`);
  //   const newFavoriteRef = await push(favoritesRef, favoriteData);

  //   return { id: newFavoriteRef.key, ...favoriteData };
  // } catch (error) {
  //   console.error('Error adding favorite: ', error);
  //   throw error;
  // }

  try {
    // Step 1: Find the user by email
    const usersRef = ref(database, 'users');
    const userQuery = query(usersRef, orderByChild('email'), equalTo(email));

    console.log(email);

    const snapshot = await get(userQuery);

    if (snapshot.exists()) {
      // Step 2: Extract the user ID
      const userData = snapshot.val();
      const userId = Object.keys(userData)[0]; // Get the user ID

      // Step 3: Reference to the user's favorites
      const favoritesRef = ref(database, `users/${userId}/favorites`);

      // Step 4: Add the new favorite to the user's favorites
      const newFavoriteRef = await push(favoritesRef, favoriteData);

      // Return the new favorite with the generated ID
      return { id: newFavoriteRef.key, ...favoriteData };
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('Error adding favorite: ', error);
    throw error;
  }
};
