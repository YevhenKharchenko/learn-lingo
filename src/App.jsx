import { Toaster } from 'react-hot-toast';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { useBodyBackgroundColor } from './hooks/useBodyBackgroundColor.jsx';
import { PrivateRoute } from './components/PrivateRoute.jsx';

import SharedLayout from './components/SharedLayout/SharedLayout.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/TeachersPage/TeachersPage.jsx'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage.jsx'));

function App() {
  useBodyBackgroundColor();

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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
