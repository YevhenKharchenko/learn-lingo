import Navigation from '../Navigation/Navigation.jsx';
import s from './AppBar.module.scss';
import { NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav/AuthNav.jsx';
import logo from '../../assets/images/ukraine.svg';

const AppBar = () => {
  return (
    <header className={s.header}>
      <NavLink to="/" className={s.logo}>
        <img src={logo} width="28" height="28" /> LearnLingo
      </NavLink>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default AppBar;
