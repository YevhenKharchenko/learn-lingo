import { ref, get, query, orderByKey } from 'firebase/database';
import { database } from './firebase.js';

export const fetchAllTeachersFirebase = async () => {
  const teachersRef = ref(database, 'teachers');

  let teachersQuery = query(teachersRef, orderByKey());

  const snapshot = await get(teachersQuery);

  if (snapshot.exists()) {
    const teachersData = snapshot.val();
    const teachersArray = Object.entries(teachersData).map(([key, value]) => ({
      key,
      ...value,
    }));

    return teachersArray;
  } else {
    return [];
  }
};
