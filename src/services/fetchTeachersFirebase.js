import { ref, get, query, limitToFirst } from 'firebase/database';
import { database } from './firebase.js';

export const fetchTeachersFirebase = async () => {
  try {
    const teachersRef = ref(database, 'teachers');
    const snapshot = await get(query(teachersRef, limitToFirst(4)));

    if (snapshot.exists()) {
      const teachersData = snapshot.val();
      console.log(teachersData);

      return teachersData;
    } else {
      console.log('No data available');

      return null;
    }
  } catch (error) {
    console.error('Error getting data:', error);
    throw error;
  }
};
