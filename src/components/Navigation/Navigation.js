import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getisAuth } from '../../redux/app/selector-auth';
import s from './Navigation.module.css';

function Navigation() {
  const isAuth = useSelector(getisAuth);
  return (
    <nav className={s.nav}>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>

      {isAuth && (
        <NavLink
          to="/phonebook"
          //exact
          // className={s.link}
          // activeClassName={s.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
