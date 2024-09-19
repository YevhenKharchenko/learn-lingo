import { createSelector } from '@reduxjs/toolkit';

export const selectTeachers = state => state.teachers?.items;

export const selectIsLoading = state => state.teachers?.isLoading;

export const selectLastKey = state => state.teachers?.lastKey;

export const selectHasMore = state => state.teachers?.hasMore;

export const selectHasFetched = state => state.teachers?.hasFetched;

export const selectFilters = state => state.teachers?.filters;

export const selectFilteredTeachers = createSelector(
  [selectTeachers, selectFilters],
  (teachers, filters) => {
    const { language, level, price } = filters;
    return teachers.filter(teacher => {
      const matchesLanguage = !language || teacher.languages.includes(language);
      const matchesLevel = !level || teacher.levels.includes(level);
      const matchesPrice = !price || teacher.price_per_hour <= parseInt(price);
      return matchesLanguage && matchesLevel && matchesPrice;
    });
  }
);
