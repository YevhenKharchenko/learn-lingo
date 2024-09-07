import s from './LoginForm.module.scss';
import sprite from '../../assets/icons/sprite.svg';
import Input from '../../shared/components/Input/Input.jsx';
import Button from '../../shared/components/Button/Button.jsx';

const LoginForm = ({ closeModal }) => {
  return (
    <div className={s.container}>
      <button className={s.closeBtn} onClick={closeModal}>
        <svg className={s.closeIcon} width="32" height="32">
          <use xlinkHref={`${sprite}#icon-x`}></use>
        </svg>
      </button>
      <h2 className={s.loginTitle}>Log In</h2>
      <p className={s.loginText}>
        Welcome back! Please enter your credentials to access your account and continue your search
        for an teacher.
      </p>
      <form className={s.form}>
        <label>
          <Input type="email" placeholder="Email" />
        </label>
        <label>
          <Input type="password" placeholder="Password" />
        </label>
        <Button type="submit" title="Log In" className={s.submitBtn} />
      </form>
    </div>
  );
};

export default LoginForm;
