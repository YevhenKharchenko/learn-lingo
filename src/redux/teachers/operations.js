import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTeachersFirebase } from '../../services/fetchTeachersFirebase.js';
import toast from 'react-hot-toast';

export const fetchTeachers = createAsyncThunk('teachers/fetchAll', async (_, thunkAPI) => {
  try {
    const teachers = await fetchTeachersFirebase();

    return teachers;
  } catch (e) {
    if (e.code === 'auth/email-already-in-use') {
      return thunkAPI.rejectWithValue(e.message);
    }

    toast.error(`Oops! Something went wrong. Error details: ${e.message}`);
    return thunkAPI.rejectWithValue(e.message);
  }
});
