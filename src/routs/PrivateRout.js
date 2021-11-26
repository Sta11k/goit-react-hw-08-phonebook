export function PrivateRoute({ isAuth, component: Component }) {
  return (
    <>
      <h1> PrivateRoute</h1>;
      <Component />
    </>
  );
}
