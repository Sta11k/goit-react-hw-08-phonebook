import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/app/selector-auth';
// import Button from '@material-ui/core/Button';
import { Button } from 'react-bootstrap';
import { logOutThunk } from '../../redux/app/thunks';
// import defaultAvatar from '../../img/avatar.png';
// import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const handleLogOut = () => {
    console.log('click');
    dispatch(logOutThunk());
  };
  return (
    <div>
      <span>Hello... {userName}</span>
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
