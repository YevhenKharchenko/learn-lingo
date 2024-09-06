import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = ({ isHomePage }) => {
  return (
    <header className={clsx(s.header, isHomePage && s.isHomePage)}>
      <nav className={s.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/teachers" className={buildLinkClass}>
          Teachers
        </NavLink>
        <NavLink to="/favorite" className={buildLinkClass}>
          Favorite
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
