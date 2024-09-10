import TeachersItem from '../TeachersItem/TeachersItem.jsx';
import s from './FavoritesList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectFavorites, selectIsLoggedIn, selectUserEmail } from '../../redux/selectors.js';
import Button from '../../shared/components/Button/Button.jsx';
import { fetchFavorites } from '../../redux/auth/operations.js';

const FavoritesList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const email = useSelector(selectUserEmail);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavorites({ email }));
    }
  });

  return (
    <>
      <ul className={s.list}>
        {!!favorites.length &&
          favorites.map((el, idx) => {
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
