import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import SignUpPage from '../pages/SignUpPage';
import UsersPage from '../pages/UsersPage';
import * as usersOperations from '../redux/users/usersOperations';

import './App.css';

class App extends Component {
  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SignUpPage} />
          <Route path="/users" component={UsersPage} />
          {/* <Route path="/users/:id" component={UserPage} />       */}
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchUsers: usersOperations.fetchUsers,
};

export default connect(null, mapDispatchToProps)(App);
