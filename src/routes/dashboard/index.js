import React, { Component } from 'react';
import './dashboard.css';
import Layout from '../../components/Layout';
import { Redirect } from 'react-router-dom';
import { getDashboard } from '../../helpers/network';
import { userLogout } from '../../helpers/authentication';
import avatarimage from "../dashboard/avatar.png";
import { Link } from "react-router-dom";

const Row = (props) => {
  return <tr>
    <th scope="row">{ props.row._id}</th>
    {/* <td scope="row">{<Link to={'/newRequest'}> props.row._id </Link>}</td> */}
    <td>{props.row.subject}</td>
    <td>{props.row.request_type}</td>
    <td>{props.row.date}</td>
    <td>{props.row.status}</td>
  </tr>
 }

const Loading = (props) => {
  return <div className="alert alert-info" role="alert">
    Logging In Please Wait
  </div>
}

const Table = (props) => {
  return <div>
  <div className="dashboard-greetings">
  <img src={avatarimage} alt="avatar" className="left-image dashboard-image" />
  <h3>Hi, Employee Name</h3>
</div>
<div className="dashboard-tablemain">
  <div className="dashboard-tablename">
      <h4>Your requests</h4>
      <div className="dashboard-tablesort">
          <h5>Sort by</h5>
          <div className="dropdown show">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink5"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Date submitted
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink5">
                  <a className="dropdown-item" href="#">Subject</a>
                  <a className="dropdown-item" href="#">Status</a>
              </div>
      </div>
      </div>
  </div>
</div>

<div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Ticket ID</th>
          <th scope="col">Subject</th>
          <th scope="col">Request Type</th>
          <th scope="col">Date submitted</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {props.data ? props.data.map(row => <Row key={row.name} row={row} />) : null}
      </tbody>
    </table>
  </div>

<div className="dashboard-newrequest">
  <h4>New requests</h4>
  <div className="col-md">
       <Link to="/request" className="btn btn-primary">Employment certificate</Link>
       <button type="button" className="btn btn-primary">Expense claim</button>
       <button type="button" className="btn btn-primary">Leave request</button>
       <button type="button" className="btn btn-primary">Flight booking</button>
       <button type="button" className="btn btn-primary">Salary certificate</button>
       <button type="button" className="btn btn-primary">Non-objection certificate</button>
       <button type="button" className="btn btn-primary">Training request</button>
       <button type="button" className="btn btn-primary">Visa arrangements</button>
  </div>
</div>
  
  </div>
}

class Dashboard extends Component {
  state = {
    authenticated: false,
    data: null,
    error: false
  }
  async componentDidMount(){
    try {
      const response = await getDashboard();
      this.setState({
        data: response,
        authenticated: true
      });
    }catch(e){
      userLogout();
      this.setState({
        error: true,
        authenticated: false
      })
    }
  }
  render() {
    return (
      <Layout>
        {this.state.authenticated === false && this.state.error === true ? <Redirect to="/users/login" /> : null}
        {this.state.authenticated === false && this.state.error === false ? <Loading /> : <Table data={this.state.data}/>}
      </Layout>
    );
  }
}

export default Dashboard;
