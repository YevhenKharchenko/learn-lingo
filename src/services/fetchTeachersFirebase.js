import { ref, get, query, limitToFirst, orderByKey, startAfter } from 'firebase/database';
import { database } from './firebase.js';

export const fetchTeachersFirebase = async (lastKey = 0) => {
  try {
    const teachersRef = ref(database, 'teachers');

    let teachersQuery = query(teachersRef, orderByKey(), limitToFirst(4));

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
