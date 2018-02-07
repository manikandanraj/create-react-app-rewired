import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons';
import { Card, CardText, CardTitle } from 'react-md/lib/Cards';
import TextField from 'react-md/lib/TextFields';
import styled from 'styled-components';
import { graphql } from 'react-apollo';

import loginQuery from './Login.gql';

const LoginCard = styled(Card)`
  width: 50%;
  margin-left: 25%;
`;

export class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  validateLogin() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  authenticateUser = (e) => {
    e.preventDefault();
    // TODO: Login user
  }

  render() {
    return (
      <LoginCard>
        <CardTitle
          title="Login"
          subtitle="Authenticate to view user content."
        />
        <CardText >
          <TextField
            id="username"
            label="Username"
            onChange={username => this.setState({ username })}
            placeholder="Username"
            type="text"
            value={this.state.username}
          />
          <TextField
            id="password"
            label="Password"
            onChange={password => this.setState({ password })}
            placeholder="••••••••••••"
            type="password"
            value={this.state.password}
          />
          <div>
            <Button
              id="login"
              onClick={this.authenticateUser}
              disabled={!this.validateLogin()}
              raised
              primary
              type="submit"
            >
              {'Log In'}
            </Button>
          </div>
        </CardText>
      </LoginCard>
    );
  }
}


export default graphql(loginQuery)(LoginPage);

