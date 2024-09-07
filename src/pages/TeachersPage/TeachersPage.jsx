import DocumentTitle from '../../components/DocumentTitle.jsx';
import FiltersBar from '../../components/FiltersBar/FiltersBar.jsx';
import TeachersList from '../../components/TeachersList/TeachersList.jsx';
import Container from '../../shared/components/Container/Container.jsx';
import s from './TeachersPage.module.scss';

const TeachersPage = () => {
  return (
    <main>
      <DocumentTitle>Teachers</DocumentTitle>
      <section className={s.section}>
        <Container className={s.container}>
          <FiltersBar />
          <TeachersList />
        </Container>
      </section>
    </main>
  );
};

export default TeachersPage;
