import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout.jsx';

const Navigation = lazy(() => import('./components/Navigation/Navigation.jsx'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/TeachersPage/TeachersPage.jsx'));
const FavoritePage = lazy(() => import('./pages/FavoritePage/FavoritePage.jsx'));

function App() {
  return (
    <>
      <SharedLayout>
        <Toaster position="top-right" />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </SharedLayout>
    </>
  );
}

export default App;
