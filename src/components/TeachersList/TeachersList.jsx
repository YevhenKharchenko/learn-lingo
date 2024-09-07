import TeachersItem from '../TeachersItem/TeachersItem.jsx';
import s from './TeachersList.module.scss';
import teachers from '../../shared/data/teachers.json';

const TeachersList = () => {
  return (
    <ul className={s.list}>
      {teachers.map((el, idx) => {
        return (
          <li key={idx}>
            <TeachersItem data={el} />
          </li>
        );
      })}
    </ul>
  );
};

export default TeachersList;
