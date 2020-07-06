import React from 'react';
import { connect } from 'react-redux';
import { getPerson } from '../../redux/user/userSelectors';

const UserItem = ({ person, onGoBack }) => (
  <div>
    <button type="button" onClick={onGoBack}>
      Go back
    </button>
    {person && (
      <div key={person.login.uuid}>
        <div>
          <img
            src={person.picture.medium}
            style={{ height: '100px', width: '100px' }}
            alt={person.name.first}
          />
        </div>
        <p>
          <span>{`${person.name.title}. ${person.name.first} ${person.name.last}`}</span>
        </p>
        <p>{person.email}</p>
        <p>{person.dob.date.slice(0, 10)}</p>
        <p>{person.dob.age}</p>
      </div>
    )}
  </div>
);

const mapStateToProps = state => ({
  person: getPerson(state),
});

export default connect(mapStateToProps)(UserItem);
