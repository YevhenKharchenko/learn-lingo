import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect, useRef } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import { PrivateRoute } from './components/PrivateRoute.jsx';
import { useDispatch } from 'react-redux';
import { fetchTeachers } from './redux/teachers/operations.js';
import useBodyBackgroundColor from './hooks/useBodyBackgroundColor.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/TeachersPage/TeachersPage.jsx'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage.jsx'));

function App() {
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);

  useBodyBackgroundColor();

  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(fetchTeachers());
      isFirstRender.current = false;
    }
  }, [dispatch]);

  return (
    <>
      <SharedLayout>
        <Toaster position="top-center" />
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
