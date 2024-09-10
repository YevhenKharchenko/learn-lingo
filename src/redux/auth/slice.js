import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  addTeacherToFavorite,
  removeTeacherFromFavorite,
  fetchFavorites,
} from './operations';
import { removeFromFavoriteFirebase } from '../../services/removeFromFavoriteFirebase.js';

function handleRefreshing(state) {
  state.isRefreshing = true;
  state.error = null;
}

function handleError(state, action) {
  state.isRefreshing = false;
  state.error = action.payload;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    id: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    favorites: [],
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, handleRefreshing)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = { name: action.payload.name, email: action.payload.email };
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, handleError)
      .addCase(loginUser.pending, handleRefreshing)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = { name: action.payload.name, email: action.payload.email };
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.favorites = action.payload.favorites;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, handleError)
      .addCase(logoutUser.pending, handleRefreshing)
      .addCase(logoutUser.fulfilled, state => {
        state.isRefreshing = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.id = null;
        state.favorites = [];
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, handleError)
      .addCase(addTeacherToFavorite.pending, handleRefreshing)
      .addCase(addTeacherToFavorite.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(addTeacherToFavorite.rejected, handleError)
      .addCase(removeTeacherFromFavorite.pending, handleRefreshing)
      .addCase(removeTeacherFromFavorite.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(fav => fav.id !== action.payload.id);
      })
      .addCase(removeTeacherFromFavorite.rejected, handleError)
      .addCase(fetchFavorites.pending, handleRefreshing)
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload.favorites;
      })
      .addCase(fetchFavorites.rejected, handleError);
  },
});

export const authReducer = authSlice.reducer;
