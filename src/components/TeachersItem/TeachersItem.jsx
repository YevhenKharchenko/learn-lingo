import s from './TeachersItem.module.scss';
import sprite from '../../assets/icons/sprite.svg';
import star from '../../assets/images/star.png';
import { addComma } from '../../utils/addComma.js';
import clsx from 'clsx';

const TeachersItem = ({ data }) => {
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
              <li className={s.statItem}>
                <img src={star} alt="" width="16" height="16" />
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
        <button className={s.readMoreBtn}>Read more</button>
        <ul className={s.levels}>
          {data.levels.map((el, idx) => {
            return (
              <li className={clsx(s.levelsItem, el.includes('A1') && s.yellow)} key={idx}>
                <p className={s.levelsText}>#{el}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TeachersItem;
