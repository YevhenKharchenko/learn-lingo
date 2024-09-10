import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerFirebase } from '../../services/registerFirebase.js';
import { loginFirebase } from '../../services/loginFirebase.js';
import { logoutFirebase } from '../../services/logoutFirebase.js';
import toast from 'react-hot-toast';
import { createUserFirebase } from '../../services/createUserFirebase.js';
import { addFavoriteToUserFirebase } from '../../services/addFavoriteToUserFirebase.js';
import { fetchUserFavoritesFirebase } from '../../services/fetchUserFavoritesFirebase.js';
import { removeFromFavoriteFirebase } from '../../services/removeFromFavoriteFirebase.js';

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ email, password, name }, thunkAPI) => {
    try {
      const user = await registerFirebase(email, password, name);
      const { id } = await createUserFirebase(name, email);

      toast.success(`You have successfully registered as ${user.displayName}.`);

      return { email: user.email, name: user.displayName, token: user.accessToken, id };
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

    const { favorites } = await fetchUserFavoritesFirebase(email);

    return { email: user.email, name: user.displayName, token: user.accessToken, favorites };
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
    toast.success('You have successfully logged out');
  } catch (e) {
    toast.error(`Oops! Something went wrong. Error details: ${e.message}`);
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addTeacherToFavorite = createAsyncThunk(
  'auth/addToFavorite',
  async ({ userEmail, data }, thunkAPI) => {
    try {
      const favoriteObject = await addFavoriteToUserFirebase(userEmail, data);
      toast.success('Tutor added to the favorite list');

      return favoriteObject;
    } catch (e) {
      toast.error(`Oops! Something went wrong. Error details: ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeTeacherFromFavorite = createAsyncThunk(
  'auth/removeFromFavorite',
  async ({ userEmail, avatar }, thunkAPI) => {
    try {
      const favoriteObject = await removeFromFavoriteFirebase(userEmail, avatar);
      toast.success('Tutor removed from the favorite list');

      return favoriteObject;
    } catch (e) {
      toast.error(`Oops! Something went wrong. Error details: ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchFavorites = createAsyncThunk(
  'auth/fetchFavorites',
  async ({ email }, thunkAPI) => {
    try {
      const { favorites } = await fetchUserFavoritesFirebase(email);

      return { favorites };
    } catch (e) {
      toast.error(`Oops! Something went wrong. Error details: ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
