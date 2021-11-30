import { useSelector, useDispatch } from 'react-redux';
import { getUsersName } from '../../redux/app/selector-auth';
// import Button from '@material-ui/core/Button';
import { Button } from 'react-bootstrap';
import { logOutThunk } from '../../redux/app/thunks';
// import defaultAvatar from '../../img/avatar.png';
// import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  //   console.log(getUsersName);

  const userName = useSelector(getUsersName);

  const handleLogOut = () => {
    console.log('click');
    dispatch(logOutThunk());
  };

  return (
    <div>
      {/* <span>Hello.......... </span> */}
      <span>Hello... {userName ? userName : ' '}</span>
      <Button
        color="secondary"
        variant="outlined"
        type="button"
        onClick={handleLogOut}
      >
        Log out
      </Button>
    </div>
  );
}
