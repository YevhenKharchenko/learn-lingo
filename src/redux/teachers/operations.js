import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTeachersFirebase } from '../../services/fetchTeachersFirebase.js';
import toast from 'react-hot-toast';
import { fetchAllTeachersFirebase } from '../../services/fetchAllTeachersFirebase.js';

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async (lastKey = null, thunkAPI) => {
    try {
      const teachersArray = await fetchTeachersFirebase(lastKey);
      const newLastKey =
        teachersArray.length > 0 ? teachersArray[teachersArray.length - 1].key : null;

      return { teachers: teachersArray, lastKey: newLastKey };
    } catch (e) {
      toast.error(`Oops! Something went wrong. Error details: ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAllTeachers = createAsyncThunk(
  'teachers/fetchAllTeachers',
  async (_, thunkAPI) => {
    try {
      const teachers = await fetchAllTeachersFirebase();

      return teachers;
    } catch (e) {
      toast.error(`Oops! Something went wrong. Error details: ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
