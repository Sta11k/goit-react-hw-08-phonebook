import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Register.module.css';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/app/thunks.js';
export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        alert('Check input name');
    }
  };

  const handlSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    // registerThunk(user);
    dispatch(loginThunk(user));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h2>Login Form</h2>
      <form className="register" onSubmit={handlSubmit}>
        <ul className={s.register__list}>
          {/* <li className={s.gister__item}>
            <label className={s.register__label}>
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="name" />
            </label>
          </li> */}

          <li className="register__item">
            <label className={s.register__label}>
              Email
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="email"
              />
            </label>
          </li>
          <li className="register__item">
            <label className={s.register__label}>
              {' '}
              Password
              <input
                type="text"
                name="password"
                onChange={handleChange}
                value={password}
                placeholder="password"
              />
            </label>
          </li>
        </ul>
        <button type="submit">Login</button>
      </form>
      <ToastContainer />
    </>
  );
}
