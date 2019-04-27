import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { userLogout, isLoggedIn, userInfo } from '../helpers/authentication';
import avatarimage from "../_html-css/avatar.png";

class Header extends Component {
  logout = (e) => {
    userLogout();
    window.location.href = "/users/login";
  }

  exit = e => {
    userLogout
    window.location.href = "/";
  }

  render(){
    return <nav className="nav-main">
   <div className="dropdown show">
       <NavLink to={"/request"} className="navbar-toggle"  role="button" id="dropdownMenuLink" data-toggle="dropdown"
           aria-haspopup="false" aria-expanded="false">
           <i className="fas fa-bars fa-2x navmain-menu"></i>
       </NavLink>
       <div className="dropdown-menu left-subitems" aria-labelledby="dropdownMenuLink">
           <NavLink to={"/request"} className="dropdown-item left-link" id="left-image" ><img src={avatarimage} alt="avatar"
                   className="left-image" /></NavLink>
           <NavLink to={"/request"} className="dropdown-item left-link">Employment certificate</NavLink>
           <NavLink to={"/request"} className="dropdown-item left-link" >Salary certificate</NavLink>
           <NavLink to={"/request"} className="dropdown-item left-link" >Expense claim</NavLink>
           <NavLink to={"/request"} className="dropdown-item left-link" >Leave request</NavLink>
           <NavLink to={"/request"} className="dropdown-item left-link" >Flight booking</NavLink>
           <NavLink to={"/request"} className="dropdown-item left-link" >Training request</NavLink>
           <NavLink to={"/request"} className="dropdown-item left-link" >NOC certificate</NavLink>
           <div className="dropdown-divider"></div>
           <NavLink to={"/request"} className="dropdown-item left-link" >Settings</NavLink>
           <NavLink to={"/request"} className="dropdown-item left-link" >Notifications</NavLink>
           <button onClick={this.logout} className="dropdown-item left-link" >Logout</button>
           <div className="dropdown-divider"></div>
           <NavLink to={"/request"} className="dropdown-item left-link" >Exit the App</NavLink>
       </div>
   </div>

   <div className="navbar-logo">
       <NavLink to={"/request"} ><i className="fas fa-project-diagram fa-2x navmain-logo"></i><span className="logo-text">EMPLOYEE
               PORTAL</span></NavLink>
   </div>

   <div className="navbar-rightpart">

       <div className="dropdown show">
           <NavLink to={"/request"} className="navbar-toggle circle-arrow"  role="button" id="dropdownMenuLink1"
               data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
               <img src={avatarimage} alt="avatar" className="navmain-circle small-avatar" />
               <i className="fas fa-sort-down fa-2x navmain-arrow"></i>
           </NavLink>
           <div className="dropdown-menu right-subitems" aria-labelledby="dropdownMenuLink1">
               <NavLink to={"/request"} className="dropdown-item left-link" >Settings</NavLink>
               <NavLink to={"/request"} className="dropdown-item left-link" >Notifications</NavLink>
               <NavLink to={"/request"} className="dropdown-item left-link" >Logout</NavLink>
               <div className="dropdown-divider"></div>
               <NavLink to={"/request"} className="dropdown-item left-link" >Exit the App</NavLink>
           </div>
       </div>


       <div className="dropdown show">
           <NavLink to={"/request"} className="navbar-toggle navbar-notifications"  role="button" id="dropdownMenuLink3"
               data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
               <i className="fas fa-bell fa-2x navmain-notif"></i>
               <i className="fas fa-circle navmain-notifcircle"></i>
           </NavLink>
           <div className="dropdown-menu notif-subitems" aria-labelledby="dropdownMenuLink3">
               <div className="notif-body">
                   <NavLink to={"/request"}  className="notif-link">
                       <p className="notif-date">29 May 2019, 10:15 am</p>
                       <p className="notif-text">Your request <span className="notif-textred">SC0002</span> has been
                           submitted
                           and has status <span className="notif-textred">"New"</span></p>
                   </NavLink>
               </div>
               <div className="notif-body">
                   <NavLink to={"/request"}  className="notif-link">
                       <p className="notif-date">30 May 2019, 13:46 pm</p>
                       <p className="notif-text">Your request <span className="notif-textred">SC0002</span> is now under
                           status <span className="notif-textred">"Processing"</span></p>
                   </NavLink>
               </div>
               <div className="notif-body">
                   <NavLink to={"/request"}  className="notif-link">
                       <p className="notif-date">30 May 2019, 14:55 pm</p>
                       <p className="notif-text">Your attention is required! The status for your request <span
                               className="notif-textred">SC0002</span> has been changed to <span
                               className="notif-textred">"Need information"</span>. Click here to add the necessary
                           information </p>
                   </NavLink>
               </div>
               <div className="notif-body">
                   <NavLink to={"/request"}  className="notif-link">
                       <p className="notif-date">30 May 2019, 15:53 pm</p>
                       <p className="notif-text">Your request <span className="notif-textred">SC0002</span> is now under
                           status <span className="notif-textred">"Processing"</span></p>
                   </NavLink>
               </div>
               <div className="notif-body">
                   <NavLink to={"/request"}  className="notif-link">
                       <p className="notif-date">01 Jun 2019, 09:24 am</p>
                       <p className="notif-text">Your request <span className="notif-textred">SC0002</span> has been
                           completed and now under status <span className="notif-textred">"Ready for collection"</span>
                       </p>
                   </NavLink>
               </div>
           </div>
       </div>
   </div>
</nav>

  }
}

export default Header;