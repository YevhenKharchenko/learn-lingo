import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useModal } from '../../hooks/useModal.jsx';
import { selectIsRefreshing, selectUserName } from '../../redux/auth/selectors.js';
import { logoutUser } from '../../redux/auth/operations.js';
import LoginForm from '../LoginForm/LoginForm.jsx';
import RegisterForm from '../RegisterForm/RegisterForm.jsx';
import Button from '../../shared/components/Button/Button.jsx';
import Loader from '../../shared/components/Loader/Loader.jsx';
import sprite from '../../assets/icons/sprite.svg';
import s from './AuthNav.module.scss';

const AuthNav = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const isRefreshing = useSelector(selectIsRefreshing);

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
          {isRefreshing ? (
            <Loader width="48" height="48" className={s.loader} />
          ) : (
            <Button title="Log out" className={s.logoutBtn} onClick={handleLogoutBtnClick} />
          )}
        </>
      )}
    </nav>
  );
};

export default AuthNav;
