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
    const usersRef = ref(database, 'users');
    const userQuery = query(usersRef, orderByChild('email'), equalTo(email));

    console.log(email);

    const snapshot = await get(userQuery);

    if (snapshot.exists()) {
      const userData = snapshot.val();
      const userId = Object.keys(userData)[0];

      const favoritesRef = ref(database, `users/${userId}/favorites`);

      const newFavoriteRef = await push(favoritesRef, favoriteData);

      return { id: newFavoriteRef.key, ...favoriteData };
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('Error adding favorite: ', error);
    throw error;
  }
};
