import TeachersItem from '../TeachersItem/TeachersItem.jsx';
import s from './FavoritesList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import {
  selectFavorites,
  selectFilters,
  selectIsLoggedIn,
  selectUserEmail,
} from '../../redux/selectors.js';
import Button from '../../shared/components/Button/Button.jsx';
import { fetchFavorites } from '../../redux/auth/operations.js';
import { resetFilters } from '../../redux/teachers/slice.js';

const FavoritesList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const email = useSelector(selectUserEmail);
  const filters = useSelector(selectFilters);
  const [count, setCount] = useState(4);
  const listRef = useRef(null);

  const filteredFavoritesList = favorites.filter(teacher => {
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
      {count < filteredFavoritesList.length && (
        <Button title="Load more" className={s.loadBtn} onClick={handleLoadMoreBtnClick} />
      )}
    </>
  );
};

export default FavoritesList;
