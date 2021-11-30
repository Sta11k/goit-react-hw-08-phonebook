import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
// import s from './AppBar.module.css';
import { getisAuth } from '../../redux/app/selector-auth';
import { getIsLoading } from '../../redux/app/selector-auth';

export default function AppBar() {
  const isAuthApp = useSelector(getisAuth);
  // const isAuthApp = useSelector(getIsLoading);

  console.log('AppBar', isAuthApp);
  return (
    <header>
      <Navigation />
      {isAuthApp ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
