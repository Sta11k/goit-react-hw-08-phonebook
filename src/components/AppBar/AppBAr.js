import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
// import s from './AppBar.module.css';
import { getisAuth } from '../../redux/app/selector-auth';

export default function AppBar() {
  const isAuth = useSelector(getisAuth);

  return (
    <header>
      <Navigation />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
