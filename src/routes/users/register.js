import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Redirect, Link } from 'react-router-dom';
import { registerRequest } from '../../helpers/network';
import { saveUser } from '../../helpers/authentication';
class Register extends Component {
  state = {
    error: null,
    loggedin: null,
    areregistered: null
  }
  updateVal = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  submitForm = async (e) => {
    e.preventDefault();
    this.setState({
      error: null
    })
    try {
      let response = await registerRequest({ email: this.state.email, password: this.state.password, name: this.state.name });
      saveUser(response);
      this.setState({
        loggedin: true,
        areregistered: true
      })
    } catch (e) {
      this.setState({
        error: e.email
      })
    }
  }
  render() {
    return (<Layout>
      {this.state.areregistered ? <Redirect to="/success" /> : null}

      {this.state.error ?
        <div className="alert alert-danger" role="alert">
          {this.state.error}
        </div>
        : null}

      <div class="login-form-wrapper border-radius shadow-md">
        <i class="fas fa-project-diagram fa-5x"></i>
        <h2>Welcome</h2>
        <h3>Create your account here</h3>
        <div class="login-form">
          <form onSubmit={this.submitForm}>
            <div class="login-email-field">
              <input class="login-email-input border-radius-md" onChange={this.updateVal} type="name" name="name" placeholder="Your Name" />
            </div>
            <div class="login-email-field">
              <input class="login-email-input border-radius-md" onChange={this.updateVal} type="email" name="email" placeholder="name@company.com" />
            </div>
            <div class="login-email-field">
              <input class="login-password-input border-radius-md" onChange={this.updateVal} type="password" name="password" placeholder="*********" />
            </div>
            <div>
              <button type="submit" class="login-submit-button border-radius-md">Sign In</button>
            </div>
            <div class="login-to-registration">
              Already registered? Login <a><Link to="/users/login">here</Link></a>
            </div>
          </form>
        </div>
      </div>

    </Layout>)
  }
}
export default Register;