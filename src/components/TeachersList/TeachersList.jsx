import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchAllTeachers, fetchTeachers } from '../../redux/teachers/operations.js';
import {
  selectFilters,
  selectHasMore,
  selectIsLoading,
  selectIsLoggedIn,
  selectLastKey,
  selectTeachers,
  selectUserEmail,
} from '../../redux/selectors.js';
import { fetchFavorites } from '../../redux/auth/operations.js';
import { resetFilters } from '../../redux/teachers/slice.js';
import TeachersItem from '../TeachersItem/TeachersItem.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import Loader from '../../shared/components/Loader/Loader.jsx';
import s from './TeachersList.module.scss';

const TeachersList = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const lastKey = useSelector(selectLastKey);
  const hasMore = useSelector(selectHasMore);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const email = useSelector(selectUserEmail);
  const isLoading = useSelector(selectIsLoading);
  const listRef = useRef(null);
  const filters = useSelector(selectFilters);
  const hasFilters = Boolean(filters.language || filters.level || filters.price);

  const filteredTeachersList = teachers.filter(teacher => {
    const { language, level, price } = filters;

    const matchesLanguage = !language || teacher.languages.includes(language);
    const matchesLevel = !level || teacher.levels.includes(level);
    const matchesPrice = !price || teacher.price_per_hour <= parseInt(price);

    return matchesLanguage && matchesLevel && matchesPrice;
  });

  useEffect(() => {
    dispatch(resetFilters());

    if (isLoggedIn) {
      dispatch(fetchFavorites({ email }));
    }
  }, [dispatch, isLoggedIn, email]);

  const handleLoadBtnClick = async () => {
    if (hasFilters) {
      await dispatch(fetchAllTeachers());
    } else {
      await dispatch(fetchTeachers(lastKey));
    }
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  return (
    <>
      <ul className={s.list} ref={listRef}>
        {!!filteredTeachersList.length &&
          filteredTeachersList.map((el, idx) => {
            return (
              <li key={idx}>
                <TeachersItem data={el} />
              </li>
            );
          })}
      </ul>
      {!filteredTeachersList.length && (
        <div className={s.empty}>
          <p className={s.emptyText}>
            {hasMore
              ? "Click on the 'Load more' button to see additional teachers who may meet your needs."
              : 'No teachers found matching your criteria. Please adjust your filters and try again.'}
          </p>
        </div>
      )}
      {isLoading ? (
        <Loader className={s.loader} />
      ) : hasMore ? (
        <Button title="Load more" className={s.loadBtn} onClick={handleLoadBtnClick} />
      ) : null}
    </>
  );
};

export default TeachersList;
