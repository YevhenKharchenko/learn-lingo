import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from './operations';

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
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, handleRefreshing)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = { name: action.payload.name, email: action.payload.email };
        state.token = action.payload.token;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, handleError)
      .addCase(loginUser.pending, handleRefreshing)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = { name: action.payload.name, email: action.payload.email };
        state.token = action.payload.token;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, handleError)
      .addCase(logoutUser.pending, handleRefreshing)
      .addCase(logoutUser.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, handleError);
  },
});

export const authReducer = authSlice.reducer;
