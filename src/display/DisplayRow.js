import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class DisplayRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/employee/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
  render() {
    return (
   
        <tr>
          <td>
            {this.props.obj.Employee_name}
          </td>
          <td>
            {this.props.obj.Employee_id}
          </td>
          <td>
            {this.props.obj.Phone_number}
          </td>
          <td>
            {this.props.obj.Email_id}
          </td>
          <td>
            {this.props.obj.Address}
          </td>
          <td>
            {this.props.obj.Designation}
          </td>
          <td>
            {this.props.obj.joiningDate}
          </td>
          <td>
            {this.props.obj.Salary}
          </td>
         
        
       </tr>
     
    );
}
}

export default DisplayRow;