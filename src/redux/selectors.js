export const selectIsLoggedIn = state => state.auth?.isLoggedIn;

export const selectUserName = state => state.auth?.user.name;

export const selectUserId = state => state.auth?.id;

export const selectUserEmail = state => state.auth?.user.email;

export const selectIsRefreshing = state => state.auth?.isRefreshing;

export const selectTeachers = state => state.teachers?.items;

export const selectIsLoading = state => state.teachers?.isLoading;

export const selectIsLastPage = state => state.teachers?.isLastPage;

export const selectLastKey = state => state.teachers?.lastKey;

export const selectHasMore = state => state.teachers?.hasMore;

export const selectFavorites = state => state.auth?.favorites;

export const selectIsFavorite = item => state =>
  state.auth?.favorites?.some(el => el.avatar_url === item.avatar_url) || false;

export const selectFilters = state => state.teachers?.filters;
