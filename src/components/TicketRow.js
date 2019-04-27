import React, { Component } from 'react';

class TicketRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.subject}
          </td>
          <td>
            {this.props.obj.description}
          </td>
          <td>
            {this.props.obj.request_type}
          </td>
          <td>
            {this.props.obj.status}
          </td>
          <td>
            {this.props.obj.date}
          </td>
          if()
          <td>
            <button className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TicketRow;