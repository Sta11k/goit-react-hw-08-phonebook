import { Navigate } from 'react-router-dom';

export function PrivateRoute({ isAuth, component: Component }) {
  return (
    <>
      <h1> PrivateRoute</h1>
      {isAuth ? <Component /> : <Navigate to="/login" />}
      {/* <Component /> */}
    </>
  );
}
