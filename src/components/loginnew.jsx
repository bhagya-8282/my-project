import React, { useState } from "react";
import { connect } from "react-redux";

import {
    Grid,
    Typography,
    Button,
    Box,
    TextField,
    Select,
    InputLabel,
    FormControl,
    MenuItem,
    Paper,
  } from "@mui/material";
  import Joi from "joi-browser";
  import Alert from "@mui/material/Alert";
  import { useSelector, useDispatch } from "react-redux";
  import { loginAction } from "../actions/login-action";
  
const LoginNew = (props) => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        role: "",
      });
      const [errors, setErrors] = useState({
        email: "",
        password: "",
        role: "",
      });
      const [errMsg, setErrMsg] = useState("");
    
      const dispatch = useDispatch();
      const login = useSelector((state) => state.login);
      const schema = {
        email: Joi.string()
          .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
          .required(),
        password: Joi.string().min(3).required(),
        role: Joi.string().required(),
      };
    
      // Step2: Validate schema with user input
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
        event.preventDefault();
        console.log("Handle submit");
    
        // Validate user input againest schema
        setErrors(validate());
        console.log(errors);
    
        // if errors, don't redirect to products page
        if (errors) return;
    
        // Dispatch login action
        dispatch(loginAction(user));
    
        // Redirect to products page on successfull login
        if (login.loggedIn) {
          props.history.push("/admin");
        }
      };
    
    return ( 
        <div>
            <h1>
                welcome to the portal
            </h1>
            <form onSubmit={this.handleSubmit} className="w-50 mx-auto shadow-lg p-3 bg-body rounded">
           
            {/* <Typography variant="h3">Login Page</Typography>
      <Grid container>
        <Grid item xs={4} style={{ marginLeft: "auto", marginRight: "auto" }}>
          {login.errMsg && <Alert severity="error">{login.errMsg}</Alert>}
          <Paper elevation={3}>
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{
                padding: "20px",
                marginTop: "10px",
              }}
            >
              <Box mb={3}>
                <TextField
                inputProps={{ "aria-label": "Please read this" }}
                  type="email"
                  variant="outlined"
                  fullWidth
                  label="Email"
                  value={user.email}
                  name="email"
                  onChange={handleChange}
                />
                {errors && (
                  <Typography variant="caption">{errors.email}</Typography>
                )}
              </Box>

              <Box mb={3}>
                <TextField
                  inputProps={{ "aria-label": "Please read this" }}
                  type="password"
                  fullWidth
                  variant="outlined"
                  label="Password"
                  value={user.password}
                  name="password"
                  onChange={handleChange}
                />
                {errors && (
                  <Typography variant="caption">{errors.password}</Typography>
                )}
              </Box>

              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Role
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  onChange={handleChange}
                  name="role"
                  value={user.role}
                  label="Role"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="engineer">Engineer</MenuItem>
                  <MenuItem value="client">Client</MenuItem>
                </Select>
              </FormControl>
              {errors && (
                <Typography variant="caption">{errors.role}</Typography>
              )}
              <Box mt={3}>
                <Button variant="contained" type="submit" fullWidth>
                  Login
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
      </Grid> */}
                    <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={user.email}
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
              value={user.password}
              name="password"
              onChange={this.handleChange}
              
            />
          </div>
          </form>


    </div>


            
        
     );
}
 
const mapStateToProps = (state) => {
    //  const { fakestore } = state;
    return {
      login: state.login.login,
    };
  };
  
  // function to dispatch actions
  const mapDispatchToProps = (dispatch) => {
    return {
      loginAction,
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps())(LoginNew);