import { ref, query, orderByChild, get, equalTo, remove } from 'firebase/database';
import { database } from './firebase.js';

export const removeFromFavoriteFirebase = async (email, avatar) => {
  try {
    console.log(avatar);

    const usersRef = ref(database, 'users');
    const userQuery = query(usersRef, orderByChild('email'), equalTo(email));
    const snapshot = await get(userQuery);

    if (snapshot.exists()) {
      const userData = snapshot.val();
      const userId = Object.keys(userData)[0];

      const favoritesRef = ref(database, `users/${userId}/favorites`);
      const favoritesSnapshot = await get(favoritesRef);

      if (favoritesSnapshot.exists()) {
        const favorites = favoritesSnapshot.val();
        console.log(favorites);

        const favoriteIdToRemove = Object.keys(favorites).find(key => {
          return favorites[key].avatar_url === avatar;
        });
        console.log(favoriteIdToRemove);

        if (favoriteIdToRemove) {
          const favoriteToRemoveRef = ref(
            database,
            `users/${userId}/favorites/${favoriteIdToRemove}`
          );
          await remove(favoriteToRemoveRef);
          return { success: true, id: favoriteIdToRemove };
        } else {
          throw new Error('Favorite not found');
        }
      } else {
        throw new Error('No favorites found for this user');
      }
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('Error removing favorite: ', error);
    throw error;
  }
};
