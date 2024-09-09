import { ref, get, query, limitToFirst, orderByKey, startAfter } from 'firebase/database';
import { database } from './firebase.js';

export const fetchTeachersFirebase = async (lastKey = 0) => {
  // try {
  //   const teachersRef = ref(database, 'teachers');
  //   const snapshot = await get(query(teachersRef, limitToFirst(items)));

  //   if (snapshot.exists()) {
  //     const teachersData = snapshot.val();

  //     return teachersData;
  //   } else {
  //     console.log('No data available');

  //     return null;
  //   }
  // } catch (error) {
  //   console.error('Error getting data:', error);
  //   throw error;
  // }

  try {
    const teachersRef = ref(database, 'teachers');

    // Create a query with `limitToFirst` and `orderByKey`
    let teachersQuery = query(teachersRef, orderByKey(), limitToFirst(4));

    // If `lastKey` is present, start the query after that key
    if (lastKey) {
      teachersQuery = query(teachersRef, orderByKey(), startAfter(lastKey), limitToFirst(4));
    }

    const snapshot = await get(teachersQuery);

    if (snapshot.exists()) {
      const teachersData = snapshot.val();
      const teachersArray = Object.entries(teachersData).map(([key, value]) => ({
        key,
        ...value,
      }));

      return teachersArray;
    } else {
      console.log('No data available');
      return [];
    }
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
};
