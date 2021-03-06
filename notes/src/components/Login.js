import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.loginUser(
      {
        username,
        password
      },
      this.props.history
    );
  };

  render() {
    return (
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="username"
            onChange={this.handleInputChange}
            placeholder="Username"
            style={{ marginBottom: '1rem', width: '40%', maxWidth: '400px' }}
          />
          <br />
          <Input
            type="password"
            name="password"
            onChange={this.handleInputChange}
            placeholder="Password"
            style={{ marginBottom: '1rem', width: '40%', maxWidth: '400px' }}
          />
          <br />
          <Button color="info" type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
