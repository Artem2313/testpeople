import React, { Component } from 'react';
import { connect } from 'react-redux';
import authReducer from '../../redux/auth/authReducer';

class SignUp extends Component {
  handleClick = () => {
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <h1>Hello I'm sign up page</h1>
        <button type="button" onClick={this.handleClick}>
          Click
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authReducer.isAuth,
};

export default connect(null, mapDispatchToProps)(SignUp);
