import s from './RegisterForm.module.scss';
import sprite from '../../assets/icons/sprite.svg';
import Input from '../../shared/components/Input/Input.jsx';
import Button from '../../shared/components/Button/Button.jsx';

const RegisterForm = ({ closeModal }) => {
  return (
    <div className={s.container}>
      <button className={s.closeBtn} onClick={closeModal}>
        <svg className={s.closeIcon} width="32" height="32">
          <use xlinkHref={`${sprite}#icon-x`}></use>
        </svg>
      </button>
      <h2 className={s.registerTitle}>Registration</h2>
      <p className={s.registerText}>
        Thank you for your interest in our platform! In order to register, we need some information.
        Please provide us with the following information
      </p>
      <form className={s.form}>
        <label>
          <Input type="text" placeholder="Name" />
        </label>
        <label>
          <Input type="email" placeholder="Email" />
        </label>
        <label>
          <Input type="password" placeholder="Password" />
        </label>
        <Button type="submit" title="Sign Up" className={s.submitBtn} />
      </form>
    </div>
  );
};

export default RegisterForm;
