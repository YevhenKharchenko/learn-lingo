import Button from '../../shared/components/Button/Button.jsx';
import sprite from '../../assets/icons/sprite.svg';
import s from './AuthNav.module.scss';
import { useCallback } from 'react';
import { useModal } from '../../hooks/useModal.jsx';
import LoginForm from '../LoginForm/LoginForm.jsx';
import RegisterForm from '../RegisterForm/RegisterForm.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/selectors.js';
import { logoutUser } from '../../redux/auth/operations.js';

const AuthNav = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

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

  const handleLogoutBtnClick = async () => {
    await dispatch(logoutUser());
  };

  return (
    <nav className={s.nav}>
      {!isLoggedIn ? (
        <>
          <button className={s.loginBtn} onClick={() => openLoginModal()}>
            <svg className={s.loginIcon} width="20" height="20">
              <use xlinkHref={`${sprite}#icon-login`}></use>
            </svg>
            Log in
          </button>
          <Button
            title="Registration"
            className={s.registerBtn}
            onClick={() => openRegisterModal()}
          />
        </>
      ) : (
        <>
          <div className={s.userWrapper}>
            <div className={s.userIconWrapper}>
              <svg className={s.userIcon} width="24" height="24">
                <use xlinkHref={`${sprite}#icon-user`}></use>
              </svg>
            </div>
            <p className={s.userName}>{userName}</p>
          </div>
          <Button title="Log out" className={s.logoutBtn} onClick={handleLogoutBtnClick} />
        </>
      )}
    </nav>
  );
};

export default AuthNav;
