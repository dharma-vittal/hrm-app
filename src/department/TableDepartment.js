import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableDepartment extends Component {

  constructor(props) {
        console.log("props:"+props);
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4000/department/delete/'+this.props.obj._id)
            .then(() => {
              console.log('Deleted');
              this.props.action('delete');
            })
            .catch(err => {
              console.log(err); 
              this.props.action('delete');
            })
    }

    onEditClick(id){
      this.props.action(this.props.obj._id);
   }

   onDeleteClick(id){
    this.delete();    
   }
  render() {
    return (
   
        <tr>
          <td>
            {this.props.obj.Department_name}
          </td>
          <td>
            {this.props.obj.Department_id}
          </td>
          <td>
            {this.props.obj.Department_code}
          </td>
         
          <td>
            <button onClick={ e => this.onEditClick(this.props.obj._id)} className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button onClick={ e => this.onDeleteClick(this.props.obj._id)} className="btn btn-danger">Delete</button>
          </td>
        
       </tr>
     
    );
}
}

export default TableDepartment;