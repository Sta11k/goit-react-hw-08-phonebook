// import { Navigate } "react-router-dom";
export function PublicRoute({ isAuth, component: Component }) {
  return (
    <>
      <h1> PublicRoute</h1>
      {/* {isAuth? </Navigate> :<Component/>} */}
      <Component />
    </>
  );
}
