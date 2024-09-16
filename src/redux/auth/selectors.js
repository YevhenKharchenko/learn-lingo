import { createSelector } from '@reduxjs/toolkit';
import { selectFilters } from '../teachers/selectors.js';

export const selectIsLoggedIn = state => state.auth?.isLoggedIn;

export const selectUserName = state => state.auth?.user.name;

export const selectUserId = state => state.auth?.id;

export const selectUserEmail = state => state.auth?.user.email;

export const selectIsRefreshing = state => state.auth?.isRefreshing;

export const selectFavorites = state => state.auth?.favorites;

export const selectIsFavorite = item => state =>
  state.auth?.favorites?.some(el => el.avatar_url === item.avatar_url) || false;

export const selectFilteredFavorites = createSelector(
  [selectFavorites, selectFilters],
  (favorites, filters) => {
    const { language, level, price } = filters;

    return favorites.filter(teacher => {
      const matchesLanguage = !language || teacher.languages.includes(language);
      const matchesLevel = !level || teacher.levels.includes(level);
      const matchesPrice = !price || teacher.price_per_hour <= parseInt(price);

      return matchesLanguage && matchesLevel && matchesPrice;
    });
  }
);
