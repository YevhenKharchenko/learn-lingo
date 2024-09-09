import Navigation from '../Navigation/Navigation.jsx';
import s from './AppBar.module.scss';
import { NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav/AuthNav.jsx';
import logo from '../../assets/images/ukraine.svg';
import Container from '../../shared/components/Container/Container.jsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors.js';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <Container className={s.container}>
        <NavLink to="/" className={s.logo}>
          <img src={logo} width="28" height="28" /> LearnLingo
        </NavLink>
        <Navigation isLoggedIn={isLoggedIn} />
        <AuthNav isLoggedIn={isLoggedIn} />
      </Container>
    </header>
  );
};

export default AppBar;
