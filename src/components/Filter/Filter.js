// import { connect } from 'react-redux';
import s from './Filter.module.css';
// import PropTypes from 'prop-types';
import { changeFilter } from '../../redux/app/app-phonebook-actions';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/app/app-phonebook-selector';
function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onChange = event => dispatch(changeFilter(event.target.value));
  return (
    <div className={s.filter}>
      <label className={s.label}>
        {/* Find contacts by name */}
        <input
          placeholder="Find contacts by name"
          className={s.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Filter;
