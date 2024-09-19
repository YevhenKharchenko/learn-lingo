import { createSlice } from '@reduxjs/toolkit';
import { fetchAllTeachers, fetchTeachers } from './operations';

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
    isLoading: false,
    error: null,
    lastKey: null,
    hasMore: true,
    hasFetched: false,
    filters: {
      language: null,
      level: null,
      price: null,
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: state => {
      state.filters = {
        language: null,
        level: null,
        price: null,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTeachers.pending, handleRefreshing)
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload.teachers];
        state.lastKey = action.payload.lastKey;
        state.hasMore = action.payload.teachers.length > 3;
        state.hasFetched = true;
      })
      .addCase(fetchTeachers.rejected, handleError)
      .addCase(fetchAllTeachers.pending, handleRefreshing)
      .addCase(fetchAllTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        state.hasMore = false;
      })
      .addCase(fetchAllTeachers.rejected, handleError);
  },
});

export const { setFilters, resetFilters } = teachersSlice.actions;

export const teachersReducer = teachersSlice.reducer;
