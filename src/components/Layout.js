import React, { Component } from 'react';
import Header from './Header';
import "./bootstrap.min.css";
import "./app.css";
import { isLoggedIn } from '../helpers/authentication';
class Layout extends Component {
  render(){
    return <div>
      
      {isLoggedIn() ? <Header /> : null}
      <div className="container">
        {this.props.children}
      </div>
    </div>
  }
}
export default Layout;