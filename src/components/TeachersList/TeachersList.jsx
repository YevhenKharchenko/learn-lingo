import TeachersItem from '../TeachersItem/TeachersItem.jsx';
import s from './TeachersList.module.scss';
// import teachers from '../../shared/data/teachers.json';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTeachers } from '../../redux/teachers/operations.js';
import {
  selectHasMore,
  selectIsLoggedIn,
  selectLastKey,
  selectTeachers,
  selectUserEmail,
} from '../../redux/selectors.js';
import Button from '../../shared/components/Button/Button.jsx';
import { fetchFavorites } from '../../redux/auth/operations.js';

const TeachersList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const lastKey = useSelector(selectLastKey);
  const hasMore = useSelector(selectHasMore);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const email = useSelector(selectUserEmail);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavorites({ email }));
    }
  }, [dispatch, isLoggedIn, email]);

  const handleLoadBtnClick = () => {
    dispatch(fetchTeachers(lastKey));
  };

  return (
    <>
      <ul className={s.list}>
        {!!teachers.length &&
          teachers.map((el, idx) => {
            return (
              <li key={idx}>
                <TeachersItem data={el} />
              </li>
            );
          })}
      </ul>
      {hasMore && <Button title="Load more" className={s.loadBtn} onClick={handleLoadBtnClick} />}
    </>
  );
};

export default TeachersList;
