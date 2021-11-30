import { useSelector, useDispatch } from 'react-redux';
import { getUsersName } from '../../redux/app/selector-auth';
import s from './UserMenu.module.css';
// import Button from '@material-ui/core/Button';
import { Button } from 'react-bootstrap';
import { logOutThunk } from '../../redux/app/thunks';

export default function UserMenu() {
  const dispatch = useDispatch();

  const userName = useSelector(getUsersName);

  const handleLogOut = () => {
    console.log('click');
    dispatch(logOutThunk());
  };

  return (
    <div className={s.userMenu}>
      {/* <span>Hello.......... </span> */}
      <span className={s.user__button}>
        Hello... {userName ? userName : ' '}
      </span>
      <Button
        color="FFFFFF"
        variant="info"
        type="button"
        onClick={handleLogOut}
      >
        Log out
      </Button>
    </div>
  );
}
