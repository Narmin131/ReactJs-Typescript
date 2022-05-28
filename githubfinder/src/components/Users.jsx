import React, { Component } from "react";
import User from "./User";

export class Users extends Component {
  render() {
    return (
      <div className="container p-0">
        <div className="row p-0">
          
          {this.props.uservalue.map((user) => (
            <User user={user}/>
          ))}
        
        </div>
      </div>
    );
  }
}

export default Users;