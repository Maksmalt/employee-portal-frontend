import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Redirect, Link } from 'react-router-dom';
import { loginRequest } from '../../helpers/network';
import { saveUser } from '../../helpers/authentication';
class Login extends Component {
  state = {
    error: null,
    loggedin: null
  }
  updateVal = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  submitForm = async(e) => {
    e.preventDefault();
    this.setState({
      error: null
    })
    try {
      let response = await loginRequest({email: this.state.email, password: this.state.password});
      saveUser(response);
      this.setState({
        loggedin: true
      })
    }catch (e){
      this.setState({
        error: e.email
      })
    }
  }
  render(){
    return (<Layout>
      {this.state.loggedin ? <Redirect to="/users/"/> : null}

      {this.state.error ?
        <div className="alert alert-danger" role="alert">
          {this.state.error}
        </div>
      : null }

    <div className="login-form-wrapper border-radius shadow-md">
            <i className="fas fa-project-diagram fa-5x"></i>
            <h2>Welcome back!</h2>
            <h3>Sign in to your account</h3>
            <div className="login-form"> 
                <form onSubmit={this.submitForm}>
                    <div className="login-email-field">
                        <input className="login-email-input border-radius-md" type="email" name="email" placeholder="name@company.com" onChange={this.updateVal} />
                    </div>
                    <div className="login-email-field">
                        <input className="login-password-input border-radius-md"type="password" name="password" placeholder="*********" onChange={this.updateVal} />
                    </div>
                    <div>
                        <button type="submit" className="login-submit-button border-radius-md">Sign In</button>
                    </div>
                    <div className="login-to-registration">
                        Don't have an account yet? You can create it <a><Link to="/register">here</Link></a>
                    </div>
                </form>
            </div>       
        </div>
    </Layout>)
  }
}
export default Login;