import BookForm from '../BookForm/BookForm.jsx';
import sprite from '../../assets/icons/sprite.svg';
import s from './BookFormModal.module.scss';

const BookFormModal = ({ avatar, name, closeModal }) => {
  return (
    <div className={s.container}>
      <button className={s.closeBtn} onClick={closeModal}>
        <svg className={s.closeIcon} width="32" height="32">
          <use xlinkHref={`${sprite}#icon-x`}></use>
        </svg>
      </button>
      <h2 className={s.formTitle}>Book trial lesson</h2>
      <p className={s.formText}>
        Our experienced tutor will assess your current language level, discuss your learning goals,
        and tailor the lesson to your specific needs.
      </p>
      <div className={s.infoWrapper}>
        <img src={avatar} alt="Avatar" width="44" height="44" className={s.img} />
        <div className={s.nameWrapper}>
          <p className={s.nameText}>Your teacher</p>
          <p className={s.teacherName}>{name}</p>
        </div>
      </div>
      <h3 className={s.formSubtitle}>What is your main reason for learning English?</h3>
      <BookForm closeModal={closeModal} />
    </div>
  );
};

export default BookFormModal;
