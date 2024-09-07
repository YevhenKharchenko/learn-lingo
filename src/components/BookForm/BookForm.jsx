import Input from '../../shared/components/Input/Input.jsx';
import clsx from 'clsx';
import s from './BookForm.module.scss';
import Button from '../../shared/components/Button/Button.jsx';
import sprite from '../../assets/icons/sprite.svg';

const BookForm = ({ avatar, name, closeModal }) => {
  return (
    <div className={s.container}>
      <button className={s.closeBtn} onClick={closeModal}>
        <svg className={s.closeIcon} width="32" height="32">
          <use xlinkHref={`${sprite}#icon-x`}></use>
        </svg>
      </button>
      <h2 className={s.formTitle}>Make an appointment with a teacher</h2>
      <p className={s.formText}>
        You are just one step away from unlocking your language potential! Fill out the short form
        below to book your personal session with a professional language teacher. We ensure a
        customized approach and respect for your learning pace.
      </p>
      <div className={s.infoWrapper}>
        <img src={avatar} alt="Avatar" width="44" height="44" className={s.img} />
        <div className={s.nameWrapper}>
          <p className={s.nameText}>Your teacher</p>
          <p className={s.teacherName}>{name}</p>
        </div>
      </div>
      <form className={s.form}>
        <label>
          <Input type="text" name="name" placeholder="Name" />
        </label>
        <div className={s.inputWrapper}>
          <label>
            <Input type="tel" name="tel" className={s.telInput} value="+380" />
          </label>
          <label>
            <Input type="time" name="time" className={s.telInput} placeholder="00:00" />
          </label>
        </div>
        <label>
          <Input type="email" name="email" placeholder="Email" />
        </label>
        <label>
          <textarea className={s.textarea} name="comment" placeholder="Comment"></textarea>
        </label>
        <Button type="submit" title="Send" className={s.submitBtn} />
      </form>
    </div>
  );
};

export default BookForm;
