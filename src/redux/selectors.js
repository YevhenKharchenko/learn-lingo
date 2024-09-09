export const selectIsLoggedIn = state => state.auth?.isLoggedIn;

export const selectUserName = state => state.auth?.user.name;

export const selectIsRefreshing = state => state.auth?.isRefreshing;

export const selectTeachers = state => state.teachers?.items;

export const selectIsLastPage = state => state.teachers?.isLastPage;

export const selectLastKey = state => state.teachers?.lastKey;

export const selectHasMore = state => state.teachers?.hasMore;
