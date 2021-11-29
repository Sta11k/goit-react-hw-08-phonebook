import { Navigate } from 'react-router-dom';
import { getisAuth } from '../redux/app/selector-auth';
import { useSelector } from 'react-redux';

export function PrivateRoute({ component: Component }) {
  const isAuth = useSelector(getisAuth);
  //  const shouldRedirect = isAuth && restricted;
  return (
    <>
      <h1> PrivateRoute</h1>
      {isAuth ? <Component /> : <Navigate to="/login" />}
    </>
  );
}
