import { Navigate } from 'react-router-dom';
import { getisAuth } from '../redux/app/selector-auth';
import { useSelector } from 'react-redux';

export function PrivateRoute({ component: Component }) {
  const isAuth = useSelector(getisAuth);
  console.log('PrivateRoute', isAuth);
  //  const shouldRedirect = isAuth && restricted;
  return <>{isAuth ? <Component /> : <Navigate to="/login" />}</>;
}
