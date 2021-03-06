import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/NavBar.css";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    let navItem = (
      <MDBDropdownMenu className="dropdown-default">
        <MDBDropdownItem href="/signin">כניסה</MDBDropdownItem>
      </MDBDropdownMenu>
    );
    if (this.props.name) {
      navItem = (
        <MDBDropdownMenu className="dropdown-default">
          <MDBDropdownItem>{this.props.name}</MDBDropdownItem>
        </MDBDropdownMenu>
      );
    }

    return (
      <Router>
        <div id="backgroung">
          <MDBNavbar color="white" light right expand="xl">
            <MDBNavbarBrand href="/">
              <strong className="black-text">קנאביז</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink shortcut topLevel active to="./products">
                    מוצרים
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="#!">
                    <MDBIcon fab icon="twitter" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="#!">
                    <MDBIcon fab icon="google-plus-g" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      {!this.props.name && (
                        <React.Fragment>
                          <MDBDropdownItem href="/signin">
                            כניסה
                          </MDBDropdownItem>
                          <MDBDropdownItem href="/signup">
                            הרשמה
                          </MDBDropdownItem>
                        </React.Fragment>
                      )}

                      {this.props.name && (
                        <React.Fragment>
                          <MDBDropdownItem href="/myProfile">
                            שלום {this.props.name}
                          </MDBDropdownItem>
                          <MDBDropdownItem href="/logout">
                            התנתקות
                          </MDBDropdownItem>
                        </React.Fragment>
                      )}
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </div>
      </Router>
    );
  }
}

export default NavbarPage;
