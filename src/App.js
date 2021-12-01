// import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Phonebook from './pages/Phonebook';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PublicRoute } from './routs/PublicRout';
import { PrivateRoute } from './routs/PrivateRout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currentThunk } from './redux/app/thunks';
// import { logOutThunk } from './redux/app/thunks';
import AppBar from '../src/components/AppBar/AppBAr';
import { getIsRefresh } from './redux/app/selector-auth';
// import { authSelector } from './redux/app/selector-auth';

const isAuth = false;

export default function App() {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(state => state.state);
  const isFetchingCurret = useSelector(getIsRefresh);
  // console.log(isFetchingCurret);

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
    !isFetchingCurret && (
      <div className="App">
        <AppBar />
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home />}
              redirectTo="/Phonebook"
              // exact
              // element={<PrivateRoute isAuth={isAuth} component={Home}/>}
            />
            <Route
              path="/phonebook"
              isAuth={isAuth}
              element={<PrivateRoute component={Phonebook} />}
            />

            <Route path="/login" element={<PublicRoute component={Login} />} />
            <Route
              path="/register"
              element={<PublicRoute isAuth={isAuth} component={Register} />}
            />
          </Routes>
        </main>
      </div>
    )
  );
}
