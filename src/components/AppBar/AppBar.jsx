import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import Container from '../../shared/components/Container/Container.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import logo from '../../assets/images/ukraine.svg';
import sprite from '../../assets/icons/sprite.svg';
import s from './AppBar.module.scss';
import ContextMenu from '../ContextMenu/ContextMenu.jsx';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [scrolled, setScrolled] = useState();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuBtnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <header className={clsx(s.header, scrolled && s.scrolled)}>
      <Container className={s.container}>
        <NavLink to="/" className={s.logo}>
          <img src={logo} alt="Logo" width="28" height="28" /> LearnLingo
        </NavLink>
        <Navigation isLoggedIn={isLoggedIn} />
        <AuthNav isLoggedIn={isLoggedIn} />
        <button className={s.menuBtn} type="button" onClick={handleMenuBtnClick}>
          <svg className={s.menuIcon} width="32" height="32">
            <use xlinkHref={`${sprite}#icon-${menuIsOpen ? 'x' : 'menu'}`}></use>
          </svg>
        </button>
        {menuIsOpen && <ContextMenu isLoggedIn={isLoggedIn} />}
      </Container>
    </header>
  );
};

export default AppBar;
