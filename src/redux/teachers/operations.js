import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTeachersFirebase } from '../../services/fetchTeachersFirebase.js';
import toast from 'react-hot-toast';

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchAll',
  async (lastKey = null, thunkAPI) => {
    try {
      //   const teachers = await fetchTeachersFirebase(items);

      //   return teachers;

      const teachersArray = await fetchTeachersFirebase(lastKey);
      const newLastKey =
        teachersArray.length > 0 ? teachersArray[teachersArray.length - 1].key : null;

      return { teachers: teachersArray, lastKey: newLastKey };
    } catch (e) {
      if (e.code === 'auth/email-already-in-use') {
        return thunkAPI.rejectWithValue(e.message);
      }

      toast.error(`Oops! Something went wrong. Error details: ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
