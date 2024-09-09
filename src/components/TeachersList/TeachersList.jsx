import TeachersItem from '../TeachersItem/TeachersItem.jsx';
import s from './TeachersList.module.scss';
// import teachers from '../../shared/data/teachers.json';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchTeachers } from '../../redux/teachers/operations.js';
import {
  selectHasMore,
  selectIsLastPage,
  selectLastKey,
  selectTeachers,
} from '../../redux/selectors.js';
import Button from '../../shared/components/Button/Button.jsx';

const TeachersList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const isLastPage = useSelector(selectIsLastPage);
  const lastKey = useSelector(selectLastKey);
  const isFirstRender = useRef(true);
  const hasMore = useSelector(selectHasMore);

  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(fetchTeachers());
      isFirstRender.current = false;
    }
  }, [dispatch]);

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
