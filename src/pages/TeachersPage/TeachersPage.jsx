import DocumentTitle from '../../components/DocumentTitle.jsx';
import FiltersBar from '../../components/FiltersBar/FiltersBar.jsx';
import TeachersList from '../../components/TeachersList/TeachersList.jsx';
import s from './TeachersPage.module.scss';

const TeachersPage = () => {
  return (
    <main>
      <DocumentTitle>Teachers</DocumentTitle>
      <section className={s.container}>
        <FiltersBar />
        <TeachersList />
      </section>
    </main>
  );
};

export default TeachersPage;
