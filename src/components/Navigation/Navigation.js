import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getisAuth } from '../../redux/app/selector-auth';
import { getIsFetchingCurrent } from '../../redux/app/selector-auth';

function Navigation() {
  const isAuth = useSelector(getisAuth);
  const isLoading = useSelector(getIsFetchingCurrent);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      {isAuth && (
        <NavLink
          to="/phonebook"
          // exact
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
