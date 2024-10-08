import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchAllTeachers, fetchTeachers } from '../../redux/teachers/operations.js';
import { fetchFavorites } from '../../redux/auth/operations.js';
import {
  selectFilteredTeachers,
  selectFilters,
  selectHasFetched,
  selectHasMore,
  selectIsLoading,
  selectLastKey,
} from '../../redux/teachers/selectors.js';
import { selectIsLoggedIn, selectUserEmail } from '../../redux/auth/selectors.js';
import { resetFilters } from '../../redux/teachers/slice.js';
import TeachersItem from '../TeachersItem/TeachersItem.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import Loader from '../../shared/components/Loader/Loader.jsx';
import s from './TeachersList.module.scss';

const TeachersList = () => {
  const dispatch = useDispatch();
  const lastKey = useSelector(selectLastKey);
  const hasMore = useSelector(selectHasMore);
  const isLoading = useSelector(selectIsLoading);
  const listRef = useRef(null);
  const filters = useSelector(selectFilters);
  const hasFilters = Boolean(filters.language || filters.level || filters.price);
  const filteredTeachersList = useSelector(selectFilteredTeachers);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const hasFetched = useSelector(selectHasFetched);
  const email = useSelector(selectUserEmail);
  const isFirstRender = useRef(false);

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  useEffect(() => {
    if (!isFirstRender.current && !hasFetched) {
      dispatch(fetchTeachers());
      isFirstRender.current = true;
    }
  }, [dispatch, hasFetched]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavorites({ email }));
    }
  }, [dispatch, email, isLoggedIn]);

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
