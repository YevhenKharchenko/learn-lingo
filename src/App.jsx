import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect, useRef } from 'react';
import { useBodyBackgroundColor } from './hooks/useBodyBackgroundColor.jsx';
import { PrivateRoute } from './components/PrivateRoute.jsx';
import { fetchTeachers } from './redux/teachers/operations.js';

import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import { selectIsLoggedIn, selectUserEmail } from './redux/selectors.js';
import { fetchFavorites } from './redux/auth/operations.js';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/TeachersPage/TeachersPage.jsx'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage.jsx'));

function App() {
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const email = useSelector(selectUserEmail);

  useBodyBackgroundColor();

  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(fetchTeachers());
      isFirstRender.current = false;
    }
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavorites({ email }));
    }
  }, [dispatch, email, isLoggedIn]);

  return (
    <>
      <SharedLayout>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<CatalogPage />} />
          <Route
            path="/favorite"
            element={<PrivateRoute redirectTo="/" component={<FavoritePage />} />}
          />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
