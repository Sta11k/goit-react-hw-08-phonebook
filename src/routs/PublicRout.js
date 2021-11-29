import { Navigate } from 'react-router-dom';
import { getisAuth } from '../redux/app/selector-auth';
import { useSelector } from 'react-redux';
export function PublicRoute({ component: Component }) {
  const isAuth = useSelector(getisAuth);
  // const shouldRedirect = isAuth && restricted;
  return (
    <>
      <h1> PublicRoute</h1>
      {isAuth ? <Navigate to="/" /> : <Component />}
    </>
  );
}
