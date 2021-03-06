import React, { Component } from "react";
import axios from "axios";

class Registrationform extends React.Component {
  state = {
    regi: {
      fullName: "",
      contactNo: "",
      email: "",
      password: "",
      role: "",
    },
  };

  componentDidMount() {
    axios
      .get(
        ``
      )
      .then((res) => {
        const regi = { ...this.state.regi };
        regi.fullName = res.data.fullName;
        regi.contactNo = res.data.contactNo;
        regi.email = res.data.login.email;
        regi.password = res.data.login.password;
        regi.role = res.data.role;
        console.log(res.data);
        console.log(regi);
        this.setState({ regi: regi });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    const regi = { ...this.state.regi };
    regi[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ regi: regi });
  };
/////////

// handleFormValidation() {    
//     const { fullName, contactNo, email, password, role } = this.state;    
//     let formErrors = {};    
//     let formIsValid = true;    

//     //name     
//     if (!fullName) {    
//         formIsValid = false;    
//         formErrors["studNameErr"] = "Name is required.";    
//     }    

//     //Email    
//     if (!emailId) {    
//         formIsValid = false;    
//         formErrors["emailIdErr"] = "Email id is required.";    
//     }    
//     else if (!(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(emailId))) {    

//         formIsValid = false;    
//         formErrors["emailIdErr"] = "Invalid email id.";    
//     }    


//     //Gender    
//     if (gender === '' || gender === "select") {    
//         formIsValid = false;    
//         formErrors["genderErr"] = "Select gender.";    
//     }    

//     //Phone number    
//     if (!phoneNumber) {    
//         formIsValid = false;    
//         formErrors["phoneNumberErr"] = "Phone number is required.";    
//     }    
//     else {    
//         var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
//         if (!mobPattern.test(phoneNumber)) {    
//             formIsValid = false;    
//             formErrors["phoneNumberErr"] = "Invalid phone number.";    
//         }    
//     }    

//     //City    
//     if (city === '' || city === "select") {    
//         formIsValid = false;    
//         formErrors["cityErr"] = "Select city.";    
//     }    

//     this.setState({ formErrors: formErrors });    
//     return formIsValid;    
// }



//////////
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const regi = {
      contactNo: this.state.regi.contactNo,
      fullName: this.state.regi.fullName,
      login: {
        email: this.state.regi.email,
        password: this.state.regi.password,
        role: this.state.regi.role,
      },
      rollNo: this.props.match.params.rollNo,
    };
    axios
      .put(
        ``,
        regi
      )
      .then((res) => {
        this.props.history.push("/student");
      })
      .catch((err) => console.log(err));
  };


  

  render() {
    return (
      <div className="m-3">
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto shadow-lg p-3 bg-body rounded">
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Fullname
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={this.state.regi.fullName}
              name="fullName"
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
              value={this.state.regi.contactNo}
              name="contactNo"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.regi.email}
              name="email"
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
              value={this.state.regi.password}
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={this.state.regi.role}
            name="role"
            onChange={this.handleChange}
          >
            <option selected className="text-center">Select Role</option>
            <option className="text-center" value="admin">Admin</option>
            <option className="text-center" value="engineer">Engineer</option>
          </select>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Registrationform;