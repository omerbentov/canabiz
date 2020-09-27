import React from "react";
import { MDBMask, MDBRow, MDBView, MDBContainer } from "mdbreact";
import "../styles/HomePage.css";
import LogIn from "../forms/SignIn";

class LogInPage extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  componentDidMount() {
    document.querySelector("nav").style.height = "65px";
  }

  componentWillUnmount() {
    document.querySelector("nav").style.height = "auto";
  }

  render() {
    const { collapsed } = this.state;

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div>
        <MDBView>
          <MDBContainer
            style={{ height: "100%", width: "100%", paddingTop: "2rem" }}
            className="d-flex justify-content-center white-text align-items-center"
          >
            <MDBRow>
              <LogIn />
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default LogInPage;
