import axios from "axios";
import React, { Component } from "react";

class Engineer extends React.Component {
  state = {
    engineer: {
      employeeId: "",
      engineerName: "",
      domain: "",
      password: "",
    },
  };
  handleChange = (event) => {
    const engineer = { ...this.state.engineer }; // copying student object
    engineer[event.target.name] = event.target.value; // student[fullName] = "ab"
    //student.fullName = "ab";
    //student[fullName]="ab";
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ engineer: engineer});
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    
    axios
      .post("http://localhost:8080/api/addEngineer", this.state.engineer)
      .then((res) => {
        this.props.history.push("/engineer");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h3>Register Form</h3>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Fullname
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={this.state.engineer.employeeId}
              name="employeeId"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputContactNo" className="form-label">
              Contact No
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputContactNo"
              aria-describedby="emailHelp"
              value={this.state.engineer.engineerName}
              name="engineerName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={this.state.engineer.password}
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={this.state.engineer.domain}
            name="engineer"
            onChange={this.handleChange}
          >
            <option selected>Select Role</option>
            <option value="engineer">Engineer</option>
            <option value="admin">Admin</option>
          </select>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Engineer;