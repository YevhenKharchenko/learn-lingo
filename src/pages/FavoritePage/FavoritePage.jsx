import DocumentTitle from '../../components/DocumentTitle.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import s from './FavoritePage.module.scss';

const FavoritePage = () => {
  return (
    <main>
      <DocumentTitle>Favorite</DocumentTitle>
      <section className={s.section}>
        <Container className={s.container}></Container>
      </section>
    </main>
  );
};

export default FavoritePage;
