import Button from '../../shared/components/Button/Button.jsx';
import sprite from '../../assets/icons/sprite.svg';
import s from './AuthNav.module.scss';

const AuthNav = () => {
  return (
    <nav className={s.nav}>
      <button className={s.loginBtn}>
        <svg className={s.locationIcon} width="20" height="20">
          <use xlinkHref={`${sprite}#icon-login`}></use>
        </svg>
        Log in
      </button>
      <Button title="Registration" className={s.registerBtn} />
    </nav>
  );
};

export default AuthNav;
