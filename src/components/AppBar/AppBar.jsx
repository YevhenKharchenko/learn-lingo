import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import Container from '../../shared/components/Container/Container.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import logo from '../../assets/images/ukraine.svg';
import s from './AppBar.module.scss';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [scrolled, setScrolled] = useState();

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

  return (
    <header className={clsx(s.header, scrolled && s.scrolled)}>
      <Container className={s.container}>
        <NavLink to="/" className={s.logo}>
          <img src={logo} alt="Logo" width="28" height="28" /> LearnLingo
        </NavLink>
        <Navigation isLoggedIn={isLoggedIn} />
        <AuthNav isLoggedIn={isLoggedIn} />
      </Container>
    </header>
  );
};

export default AppBar;
