import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerFirebase } from '../../services/registerFirebase.js';
import { loginFirebase } from '../../services/loginFirebase.js';
import { logoutFirebase } from '../../services/logoutFirebase.js';
import toast from 'react-hot-toast';

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ email, password, name }, thunkAPI) => {
    try {
      const user = await registerFirebase(email, password, name);
      toast.success(`You have successfully registered as ${user.displayName}.`);

      return { email: user.email, name: user.displayName, token: user.accessToken };
    } catch (e) {
      if (e.code === 'auth/email-already-in-use') {
        toast.error('Email is already in use');
        return thunkAPI.rejectWithValue(e.message);
      }

      toast.error(`Oops! Something went wrong. Error details: ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    const user = await loginFirebase(email, password);
    toast.success(`You have successfully logged in as ${user.displayName}.`);

    return { email: user.email, name: user.displayName, token: user.accessToken };
  } catch (e) {
    if (e.code === 'auth/wrong-password' || e.code === 'auth/user-not-found') {
      toast.error('Invalid email or password');
      return thunkAPI.rejectWithValue(e.message);
    }

    toast.error(`Oops! Something went wrong. Error details: ${e.message}`);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await logoutFirebase();
    toast.success('You have successfully logged out.');
  } catch (e) {
    toast.error(`Oops! Something went wrong. Error details: ${e.message}`);
    return thunkAPI.rejectWithValue(e.message);
  }
});
