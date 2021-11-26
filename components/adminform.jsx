import React, { Component } from 'react';
import axios from 'axios';


class AdminForm extends React.Component {
    state = {
        admin: {
          adminId: "",
          contactNumber: "",
          emailId: "",
          password: "",
        },
      };
      handleChange = (event) => {
        const admin = { ...this.state.admin }; // copying student object
        admin[event.target.name] = event.target.value; // student[fullName] = "ab"
        //student.fullName = "ab";
        //student[fullName]="ab";
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({ admin: admin});
      };
      handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        const admins= {
          
          adminId: this.state.admin.adminId,
          contactNumber: this.state.admin.contactNumber,
          emailId: this.state.admin.emailId,
          password: this.state.admin.password,
        
       
      }
    
            axios
          .post("http://localhost:8080/addAdmin", this.state.admin)
          .then((res) => {
            this.props.history.push("/admin");
          })
          .catch((err) => console.log(err));
      };
    
    
    render() { 
        return <div>
            <h3>Register Form</h3>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              adminId            
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={this.state.admin.adminId}
              name="adminId"
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
              value={this.state.admin.contactNumber}
              name="contactNumber"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmailId" className="form-label">
              emailId
            </label>
            <input
              type="emailId"
              className="form-control"
              id="exampleInputEmailId"
              value={this.state.admin.emailId}
              name="emailId"
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
              value={this.state.admin.password}
              name="password"
              onChange={this.handleChange}
            />
          </div>
          {/* <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={this.state.admin.domain}
            name="engineer"
            onChange={this.handleChange}
          >
            <option selected>Select Role</option>
            <option value="engineer">Engineer</option>
            <option value="admin">Admin</option>
          </select> */}
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      
        </div>;
    }
}
 
export default AdminForm;