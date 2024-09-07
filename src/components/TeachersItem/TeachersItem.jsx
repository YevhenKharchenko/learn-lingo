import s from './TeachersItem.module.scss';
import sprite from '../../assets/icons/sprite.svg';
import star from '../../assets/images/star.png';
import { addComma } from '../../utils/addComma.js';
import clsx from 'clsx';
import { useState } from 'react';
import Button from '../../shared/components/Button/Button.jsx';

const TeachersItem = ({ data }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const handleReadMoreBtnClick = () => {
    setIsShowMore(true);
  };
  console.log(data);

  return (
    <div className={s.wrapper}>
      <div className={s.imgWrapper}>
        <img src={data.avatar_url} className={s.img} alt="Avatar" width="96" height="96" />
        <span className={s.circleSpan}>
          <svg className={s.circleIcon} width="8" height="8">
            <use xlinkHref={`${sprite}#icon-circle`}></use>
          </svg>
        </span>
      </div>
      <div className={s.contentWrapper}>
        <div className={s.itemHeader}>
          <div className={s.nameWrapper}>
            <p className={s.langText}>Languages</p>
            <p className={s.nameText}>{data.name + ' ' + data.surname}</p>
          </div>
          <div className={s.statWrapper}>
            <ul className={s.statistics}>
              <li className={s.statItem}>
                <svg className={s.bookIcon} width="16" height="16">
                  <use xlinkHref={`${sprite}#icon-book`}></use>
                </svg>
                <p>Lessons online</p>
              </li>
              <li className={s.statItem}>
                <p>Lessons done: {data.lessons_done}</p>
              </li>
              <li className={clsx(s.statItem, s.ratingWrapper)}>
                <img src={star} alt="Rating" width="16" height="16" />
                <p>Rating: {data.rating}</p>
              </li>
              <li className={s.statItem}>
                <p>
                  Price / 1 hour: <span className={s.priceSpan}>{data.price_per_hour}$</span>
                </p>
              </li>
            </ul>
            <button>
              <svg className={s.likeIcon} width="23" height="20">
                <use xlinkHref={`${sprite}#icon-like`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={s.infoWrapper}>
          <p className={s.infoText}>
            <span className={s.infoSpan}>Speaks:</span>{' '}
            <span className={s.underline}>{addComma(data.languages)}</span>
          </p>
          <p className={s.infoText}>
            <span className={s.infoSpan}>Lesson Info:</span> {data.lesson_info}
          </p>
          <p className={s.infoText}>
            <span className={s.infoSpan}>Conditions:</span> {data.conditions}
          </p>
        </div>
        {!isShowMore && (
          <button className={s.readMoreBtn} onClick={handleReadMoreBtnClick}>
            Read more
          </button>
        )}
        {isShowMore && (
          <div className={s.expandInfoWrapper}>
            <p className={s.lessonInfo}>{data.experience}</p>
            <ul className={s.reviewsWrapper}>
              {data.reviews.map((el, idx) => {
                return (
                  <li className={s.reviewItem} key={idx}>
                    <div className={s.reviewRatingWrapper}>
                      {/* <img src="" alt="Avatar" width="44" height="44" /> */}
                      <div className={s.reviewerAvatar}>{el.reviewer_name[0]}</div>
                      <div className={s.reviewNameWrapper}>
                        <p className={s.reviewerName}>{el.reviewer_name}</p>
                        <div className={s.starWrapper}>
                          <img src={star} alt="Rating" width="16" height="16" />
                          <p>{el.reviewer_rating}</p>
                        </div>
                      </div>
                    </div>
                    <div className={s.reviewText}>{el.comment}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <ul className={s.levels}>
          {data.levels.map((el, idx) => {
            return (
              <li className={clsx(s.levelsItem, el.includes('A1') && s.yellow)} key={idx}>
                <p className={s.levelsText}>#{el}</p>
              </li>
            );
          })}
        </ul>
        {isShowMore && <Button type="button" title="Book trial lesson" className={s.formBtn} />}
      </div>
    </div>
  );
};

export default TeachersItem;
