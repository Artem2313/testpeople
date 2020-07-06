import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as userOperations from '../redux/user/userOperations';
import * as userActions from '../redux/user/userActions';
import { getPerson } from '../redux/user/userSelectors';
import UserItem from '../components/UserItem/UserItem';

class UserPage extends Component {
  componentDidMount() {
    const { match, personUuid } = this.props;
    const { uuid } = match.params;
    personUuid(uuid);
    // const { fetchUser } = this.props;
    // fetchUser(uuid);
  }

  handleGoBack = () => {
    const { history, location } = this.props;

    if (location.state) {
      return history.push(location.state.from);
    }

    return history.push('/users');
  };

  render() {
    const { person } = this.props;
    return (
      <div>
        <h1>Single Article Page</h1>
        <h2>{JSON.stringify(this.props.location.state)}</h2>
        {person ? (
          <UserItem person={person} onGoBack={this.handleGoBack} />
        ) : (
          <div>Sorry, no user found</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  person: getPerson(state),
});

const mapDispatchToProps = {
  // fetchUser: userOperations.fetchUser,
  personUuid: userActions.personUuid,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
