import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Layout from '../../components/Layout';
const Request = (props) => {
  return <div>
  <div class="form-group">
                <label for="exampleFormControlInput1">Subject</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="e.g. Vacation request" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Request type</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Employment certificate</option>
                    <option>Expense claim</option>
                    <option>Leave request</option>
                    <option>Flight booking</option>
                    <option>Salary certificate</option>
                    <option>Training request</option>
                    <option>Salary certificate</option>
                    <option>Visa arrangements</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <input class="btn btn-primary" type="submit" value="Submit" />
            </div>
}

export default Request;