import { createSlice } from '@reduxjs/toolkit';
import { fetchTeachers } from './operations';

function handleRefreshing(state) {
  state.isLoading = true;
  state.error = null;
}

function handleError(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    items: [],
    isLastPage: false,
    isLoading: false,
    error: null,
    lastKey: null,
    hasMore: true,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTeachers.pending, handleRefreshing)
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.items = action.payload;

        state.items = [...state.items, ...action.payload.teachers];
        state.lastKey = action.payload.lastKey;
        state.hasMore = action.payload.teachers.length > 3;
      })
      .addCase(fetchTeachers.rejected, handleError);
  },
});

export const teachersReducer = teachersSlice.reducer;
