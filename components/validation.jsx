import { Typography } from "@mui/material";
import React, { useState } from "react";
import {
  Box,
 
  Grid,
  TextField,
  Button
 
} from "@mui/material";

import axios from "axios";
import Joi from "joi-browser";
import Alert from "@mui/material/Alert";
const ariaLabel = { "aria-label": "description" };
const Validationform = (props) => {
  const [user, setUser] = useState({
    //complaintId:"",
        // employeeId:" ",
        domain: "",
        engineerName: "",
        password:"",
        // complaints:"",
      
  });
  const [errors, setErrors] = useState({
    //complaintId:"",
    domain: "",
    engineerName: "",
    password:"",
});
  const [errMsg, setErrMsg] = useState(" ");
  const schema = {
    // complaintId:Joi.string().required(),
    engineerName: Joi.string().required(),
    domain: Joi.string().required(),
    password: Joi.string().required(),
  };
  const validate = () => {
    const errors = {};
    const result = Joi.validate(user, schema, { abortEarly: false });
    console.log(result);
    // setting error messages to error properties
    // ex: errors[username] = "username is required";
    // ex: errors[password] = "password is required";
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  // Capture user input and update state object
  const handleChange = (event) => {
    console.log("HandleChange");
    const usr = { ...user };
    usr[event.target.name] = event.target.value;
    //this.setState({ user: user });
    setUser(usr);
  };
  const handleSubmit = (event) => {
    // Prevent default behaviour of submit button
    console.log(user);
    event.preventDefault();
    console.log("Handle submit");
   

    setErrors(validate());
    console.log(errors);
    if (errors) {
      return;
    }
    axios
      .post("http://localhost:8080/addEngineer", user)
       .then((res) => props.history.push("/engineer"))
      .catch((err) => {
        console.log(err.response);
        setErrMsg(err.response);
      });
     //alert("Complaint is booked");
  };
  

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <Typography variant="h4">Engineer Form</Typography>
      <Grid container>
        <Grid item xs={6} style={{ marginLeft: "auto", marginRight: "auto" }}>
          {errMsg && <Alert severity="error">{errMsg}</Alert>}

          <form
           
            noValidate
            onSubmit={handleSubmit}
            style={{
              border: "1px solid blue",
              padding: "20px",
              marginTop: "10px",
            }}
          >
            {/* <Box mb={3}>
                <TextField 
                 inputProps={ariaLabel} fullWidth
                  variant="filled" required 
                   label="ComplaintId"
                   value={user.complaintId}
                   name="complaintId"
                   onChange={handleChange} />
                    {errors && (
                <Typography variant="caption">{errors.complaintId}</Typography>
              )}
                </Box>   */}
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                fullWidth
                variant="filled"
                required
                label="EngineerName"
                value={user.engineerName}
                name="engineerName"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">
                  {errors.engineerName}
                </Typography>
              )}
            </Box>
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                fullWidth
                variant="filled"
                label="Domain"
                required
                value={user.domain}
                name="domain"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">
                  {errors.domain}
                </Typography>
              )}
            </Box>

            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                fullWidth
                variant="filled"
                label="Password"
                required
                value={user.password}
                name="password"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.password}</Typography>
              )}
            </Box>

            <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>

          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Validationform;