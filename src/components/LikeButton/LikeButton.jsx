import clsx from 'clsx';
import sprite from '../../assets/icons/sprite.svg';
import s from './LikeButton.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsFavorite,
  selectIsLoggedIn,
  selectUserEmail,
  selectUserId,
} from '../../redux/selectors.js';
import { addTeacherToFavorite, removeTeacherFromFavorite } from '../../redux/auth/operations.js';
import { useState } from 'react';

const LikeButton = ({ data }) => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const userEmail = useSelector(selectUserEmail);
  const isFavorite = useSelector(selectIsFavorite(data));
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const avatar = data.avatar_url;

  const handleLikeClick = async () => {
    if (isFavorite) {
      await dispatch(removeTeacherFromFavorite({ userEmail, avatar }));
    } else {
      await dispatch(addTeacherToFavorite({ userEmail, data }));
    }
  };

  return (
    <button className={s.likeButton} onClick={handleLikeClick} disabled={!isLoggedIn}>
      <svg className={clsx(s.likeIcon, { [s.liked]: isFavorite })} width="23" height="20">
        <use xlinkHref={`${sprite}#icon-like`}></use>
      </svg>
    </button>
  );
};

export default LikeButton;
