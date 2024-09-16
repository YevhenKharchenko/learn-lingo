import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { fetchFavorites } from '../../redux/auth/operations.js';
import {
  selectFilteredFavorites,
  selectIsLoggedIn,
  selectUserEmail,
} from '../../redux/auth/selectors.js';
import { selectFilters } from '../../redux/teachers/selectors.js';
import { resetFilters } from '../../redux/teachers/slice.js';
import TeachersItem from '../TeachersItem/TeachersItem.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import s from './FavoritesList.module.scss';

const FavoritesList = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [count, setCount] = useState(4);
  const listRef = useRef(null);
  const hasFilters = Boolean(filters.language || filters.level || filters.price);
  const filteredFavoritesList = useSelector(selectFilteredFavorites);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const email = useSelector(selectUserEmail);

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavorites({ email }));
    }
  }, [dispatch, email, isLoggedIn]);

  const handleLoadMoreBtnClick = () => {
    setCount(prevCount => prevCount + 4);
    setTimeout(() => {
      listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 100);
  };

  return (
    <>
      <ul className={s.list} ref={listRef}>
        {!!filteredFavoritesList.length &&
          filteredFavoritesList.slice(0, count).map((el, idx) => {
            return (
              <li key={idx}>
                <TeachersItem data={el} />
              </li>
            );
          })}
      </ul>
      {!filteredFavoritesList.length && (
        <div className={s.empty}>
          <p className={s.emptyText}>
            {hasFilters
              ? 'No teachers found matching your criteria. Please adjust your filters and try again.'
              : 'You have not added any teachers to your favorites list yet.'}
          </p>
        </div>
      )}
      {count < filteredFavoritesList.length && (
        <Button title="Load more" className={s.loadBtn} onClick={handleLoadMoreBtnClick} />
      )}
    </>
  );
};

export default FavoritesList;
