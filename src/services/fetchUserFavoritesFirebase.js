import { ref, query, orderByChild, get, equalTo } from 'firebase/database';
import { database } from './firebase.js';

export const fetchUserFavoritesFirebase = async email => {
  const usersRef = ref(database, 'users');

  const userQuery = query(usersRef, orderByChild('email'), equalTo(email));
  const snapshot = await get(userQuery);

  if (snapshot.exists()) {
    const userData = snapshot.val();
    const userId = Object.keys(userData)[0];

    const favorites = userData[userId].favorites || [];

    const transformedFavorites = Object.entries(favorites).map(([id, data]) => ({
      id,
      ...data,
    }));

    return { userId, favorites: transformedFavorites };
  } else {
    throw new Error('User not found');
  }
};
