import DocumentTitle from '../../components/DocumentTitle.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import FiltersBar from '../../components/FiltersBar/FiltersBar.jsx';
import FavoritesList from '../../components/FavoritesList/FavoritesList.jsx';
import s from './FavoritePage.module.scss';

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
