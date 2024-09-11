import TeachersItem from '../TeachersItem/TeachersItem.jsx';
import s from './TeachersList.module.scss';
// import teachers from '../../shared/data/teachers.json';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchTeachers } from '../../redux/teachers/operations.js';
import {
  selectHasMore,
  selectIsLoading,
  selectIsLoggedIn,
  selectLastKey,
  selectTeachers,
  selectUserEmail,
} from '../../redux/selectors.js';
import Button from '../../shared/components/Button/Button.jsx';
import { fetchFavorites } from '../../redux/auth/operations.js';
import Loader from '../../shared/components/Loader/Loader.jsx';

const TeachersList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const lastKey = useSelector(selectLastKey);
  const hasMore = useSelector(selectHasMore);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const email = useSelector(selectUserEmail);
  const isLoading = useSelector(selectIsLoading);
  const listRef = useRef(null);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavorites({ email }));
    }
  }, [dispatch, isLoggedIn, email]);

  const handleLoadBtnClick = async () => {
    await dispatch(fetchTeachers(lastKey));
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  return (
    <>
      <ul className={s.list} ref={listRef}>
        {!!teachers.length &&
          teachers.map((el, idx) => {
            return (
              <li key={idx}>
                <TeachersItem data={el} />
              </li>
            );
          })}
      </ul>
      {isLoading ? (
        <Loader className={s.loader} />
      ) : hasMore ? (
        <Button title="Load more" className={s.loadBtn} onClick={handleLoadBtnClick} />
      ) : null}
    </>
  );
};

export default TeachersList;
