import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

class LoginPage extends Component {
  state = {
    username: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
        },
        props: this.props
      });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }//end handleInputChangeFor

  render() {
    return (
      <div>
        {this.props.errors.loginMessage && (
          <h2 className="alert" role="alert">
            {this.props.errors.loginMessage}
          </h2>
        )}
        <Form onSubmit={this.login} className="form">
          <h1>Forgot Password</h1>

          <Form.Group>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              className="input"
              value={this.state.username}
              onChange={this.handleInputChangeFor("username")}
            />
          </Form.Group>

          <div>
            <a href="/#/login">Login</a>
          </div>

          <Button
            className="log-in input"
            type="submit"
            name="submit"
            value="Send Email"
          >
            Send Email
          </Button>
        </Form>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);