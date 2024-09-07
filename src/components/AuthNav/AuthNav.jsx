import Button from '../../shared/components/Button/Button.jsx';
import sprite from '../../assets/icons/sprite.svg';
import s from './AuthNav.module.scss';
import { useCallback } from 'react';
import { useModal } from '../../hooks/useModal.jsx';
import LoginForm from '../LoginForm/LoginForm.jsx';
import RegisterForm from '../RegisterForm/RegisterForm.jsx';

const AuthNav = () => {
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openLoginModal = useCallback(() => {
    setModal(<LoginForm closeModal={closeModal} />);
  }, [setModal, closeModal]);

  const openRegisterModal = useCallback(() => {
    setModal(<RegisterForm closeModal={closeModal} />);
  }, [setModal, closeModal]);

  return (
    <nav className={s.nav}>
      <button className={s.loginBtn} onClick={() => openLoginModal()}>
        <svg className={s.locationIcon} width="20" height="20">
          <use xlinkHref={`${sprite}#icon-login`}></use>
        </svg>
        Log in
      </button>
      <Button title="Registration" className={s.registerBtn} onClick={() => openRegisterModal()} />
    </nav>
  );
};

export default AuthNav;
