import { useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import s from './FavoritePage.module.scss';
import { selectFavorites } from '../../redux/selectors.js';
import FiltersBar from '../../components/FiltersBar/FiltersBar.jsx';
import TeachersList from '../../components/TeachersList/TeachersList.jsx';
import FavoritesList from '../../components/FavoritesList/FavoritesList.jsx';

const FavoritePage = () => {
  return (
    <main>
      <DocumentTitle>Favorite</DocumentTitle>
      <section className={s.section}>
        <Container className={s.container}>
          <FiltersBar />
          <FavoritesList />
        </Container>
      </section>
    </main>
  );
};

export default FavoritePage;
