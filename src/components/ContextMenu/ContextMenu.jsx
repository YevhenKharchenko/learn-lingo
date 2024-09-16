import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './ContextMenu.module.scss';
import Button from '../../shared/components/Button/Button.jsx';
import Loader from '../../shared/components/Loader/Loader.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../../hooks/useModal.jsx';
import { useCallback } from 'react';
import LoginForm from '../LoginForm/LoginForm.jsx';
import RegisterForm from '../RegisterForm/RegisterForm.jsx';
import { logoutUser } from '../../redux/auth/operations.js';
import { selectIsRefreshing, selectUserName } from '../../redux/auth/selectors.js';
import sprite from '../../assets/icons/sprite.svg';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const ContextMenu = ({ isLoggedIn }) => {
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
    <section className={s.container}>
      <nav className={s.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/teachers" className={buildLinkClass}>
          Teachers
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/favorite" className={buildLinkClass}>
            Favorite
          </NavLink>
        )}
      </nav>
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
    </section>
  );
};

export default ContextMenu;
