import { Suspense } from 'react';
import Container from '../../shared/components/Container/Container.jsx';
import HourglassLoader from '../../shared/components/HourglassLoader/HourglassLoader.jsx';
import s from './SharedLayout.module.scss';
import AppBar from '../AppBar/AppBar.jsx';

const SharedLayout = ({ children }) => {
  return (
    <Container className={s.container}>
      <AppBar />
      <Suspense fallback={<HourglassLoader />}>{children}</Suspense>
    </Container>
  );
};

export default SharedLayout;
