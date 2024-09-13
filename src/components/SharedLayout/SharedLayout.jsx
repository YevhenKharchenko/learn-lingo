import { Suspense } from 'react';
import HourglassLoader from '../../shared/components/HourglassLoader/HourglassLoader.jsx';
import AppBar from '../AppBar/AppBar.jsx';

const SharedLayout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<HourglassLoader />}>{children}</Suspense>
    </>
  );
};

export default SharedLayout;
