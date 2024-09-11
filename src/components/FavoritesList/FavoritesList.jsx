import TeachersItem from '../TeachersItem/TeachersItem.jsx';
import s from './FavoritesList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
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

  return (
    <>
      <ul className={s.list}>
        {!!filteredFavoritesList.length &&
          filteredFavoritesList.map((el, idx) => {
            return (
              <li key={idx}>
                <TeachersItem data={el} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default FavoritesList;
