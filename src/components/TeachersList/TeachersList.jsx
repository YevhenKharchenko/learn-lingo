import TeachersItem from '../TeachersItem/TeachersItem.jsx';
import s from './TeachersList.module.scss';
// import teachers from '../../shared/data/teachers.json';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTeachers } from '../../redux/teachers/operations.js';
import { selectTeachers } from '../../redux/selectors.js';

const TeachersList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

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
