import React from 'react';
import { connect } from 'react-redux';
import * as usersSelectors from '../../redux/users/usersSelectors';
import * as usersActions from '../../redux/users/usersActions';

const UsersList = ({ users, onChange, surnameFilter, onSortBy, sortBy }) => (
  <div>
    <h1>Hellow from users</h1>
    <div>
      <input
        type="text"
        onChange={onChange}
        value={surnameFilter}
        placeholder="filter by surname"
      />
    </div>
    <div>
      <button
        type="button"
        onClick={() => onSortBy(sortBy === 'nameAsc' ? 'nameDsc' : 'nameAsc')}
      >
        Name
      </button>
      <button
        type="button"
        onClick={() => onSortBy(sortBy === 'ageAsc' ? 'ageDsc' : 'ageAsc')}
      >
        Age
      </button>
      <button type="button" onClick={() => onSortBy('clear')}>
        Clear
      </button>
    </div>
    <ul>
      {users.map(user => (
        <li key={user.login.uuid}>
          <div>
            <img
              src={user.picture.medium}
              style={{ height: '100px', width: '100px' }}
              alt={user.name.first}
            />
          </div>
          <p>
            <span>{`${user.name.title}. ${user.name.first} ${user.name.last}`}</span>
          </p>
          <p>{user.email}</p>
          <p>{user.dob.date.slice(0, 10)}</p>
          <p>{user.dob.age}</p>
          <button type="button">Details</button>
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  users: usersSelectors.sortBySelector(state),
  sortBy: usersSelectors.sortBy(state),
});

const mapDispatchToProps = {
  onChange: e => usersActions.surnameFilter(e.target.value),
  onSortBy: usersActions.sortBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
