
import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Engineerget extends React.Component {
  state = {
    engineers: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/addEngineer")
      .then((response) => {
        console.log(response);
        this.setState({ engineers: response.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="container">
        
        <table className="table table-primary mx-auto mt-3">
          <thead>
            <tr>
              <th>EmployeeId</th>
              <th>EngineerName</th>
              <th>Domain</th>
              <th>password</th>
            </tr>
          </thead>
          <tbody>
            {this.state.engineers.map((engineer) => (
              <tr>
                <td>{engineer.employeeId}</td>
                <td>{engineer.engineerName}</td>
                <td>{engineer.domain}</td>
                <td>{engineer.password}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
         { <Link
          to="/getengineers/add"
          className="btn btn-primary btn-large mb-1 float-end" >
          Add
        </Link> } 
      </div>
    );
  }
}

export default Engineerget;