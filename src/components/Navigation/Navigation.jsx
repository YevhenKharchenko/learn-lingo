import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.scss';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = ({ isLoggedIn }) => {
  return (
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
  );
};

export default Navigation;
