import DocumentTitle from '../../components/DocumentTitle.jsx';
import TeachersList from '../../components/TeachersList/TeachersList.jsx';
import s from './TeachersPage.module.scss';

const TeachersPage = () => {
  return (
    <main>
      <DocumentTitle>Teachers</DocumentTitle>
      <section className={s.container}>
        <TeachersList />
      </section>
    </main>
  );
};

export default TeachersPage;
