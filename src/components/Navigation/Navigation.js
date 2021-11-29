import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getisAuth } from '../../redux/app/selector-auth';

function Navigation({ isLoading }) {
  const isAuth = useSelector(getisAuth);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      {isAuth && (
        <NavLink
          to="/phonebook"
          //   exact
          //   className={s.link}
          //   activeClassName={s.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
