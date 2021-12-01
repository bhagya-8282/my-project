import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              Electronic Complaint Portal
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                
                <li className="nav-item w-50 mx-auto">
                  <NavLink className="nav-link" to="/admin">
                    Admins List
                  </NavLink>
                </li>

                
                {/* <li className="nav-item">
          <NavLink className="nav-link" to="/adminform">AdminForm</NavLink>
        </li>  */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/engineer">
                    Engineers List
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/complaintsByStatus">
                    complaints by status
                  </NavLink>
                  </li>

                  <li className="nav-item">
                  <NavLink className="nav-link" to="/products">
                    products
                  </NavLink>
                  </li>




              </ul>
              <form className="d-flex mx-auto">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink className="nav-link" to="/registration">Registration</NavLink>
        </li> 

        </ul >

        </nav>
      </div>
    );
  }
}

export default Nav;
