// import { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Phonebook from './pages/Phonebook';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PublicRoute } from './routs/PublicRout';
import { PrivateRoute } from './routs/PrivateRout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentThunk } from './redux/app/thunks';
// import { logOutThunk } from './redux/app/thunks';
import AppBar from '../src/components/AppBar/AppBAr';
// import { getIsFetchingCurrent } from './redux/app/selector-auth';
// import { authSelector } from './redux/app/selector-auth';

const isAuth = false;

export default function App() {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(currentThunk());

    // return () => {
    //   cleanup
    // }
  }, [dispatch]);

  // const handleLogOut = () => {
  //   console.log('click');
  //   dispatch(logOutThunk());
  // };
  return (
    // isFetchingCurrentUser && (
    <div className="App">
      <AppBar />
      {/* <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/phonebook">Phonebook</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <button type="button" onClick={handleLogOut}>
                Log Out
              </button>
            </li>
          </ul>
        </nav>
      </header> */}
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
            // element={<PrivateRoute isAuth={isAuth} component={Home}/>}
          />
          <Route
            path="/phonebook"
            element={
              <PrivateRoute isAuth={isAuth} restricted component={Phonebook} />
            }
          />
          <Route
            path="/login"
            isAuth={isAuth}
            element={<PublicRoute component={Login} />}
          />
          <Route
            path="/register"
            element={<PublicRoute isAuth={isAuth} component={Register} />}
          />
        </Routes>
      </main>
    </div>
    // )
  );
}
