import Button from '../../shared/components/Button/Button.jsx';
import s from './AuthNav.module.scss';

const AuthNav = () => {
  return (
    <nav className={s.nav}>
      <button className={s.loginBtn}>Log in</button>
      <Button title="Registration" className={s.registerBtn} />
    </nav>
  );
};

export default AuthNav;
