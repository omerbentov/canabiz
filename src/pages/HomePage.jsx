import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation,
  MDBCard,
} from "mdbreact";
import "../styles/HomePage.css";

class AppPage extends React.Component {
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
      <body>
        <div id="first">
          <div id="welcom">
            <MDBAnimation type="fadeInRight" delay=".3s">
              <h1 className="h1-responsive font-weight-bold mt-sm-5">
                ברוכים הבאים לאתר קנאביז
              </h1>

              <h6 className="mb-4">
                באתר תוכלו לקבל את המידע העדכני ביותר אודות הזנים המתאים ביותר
                עבורכם
              </h6>
              <MDBBtn href="/signin" color="white">
                כניסה
              </MDBBtn>
              <MDBBtn href="/signup" color="white">
                הרשמה
              </MDBBtn>
            </MDBAnimation>
          </div>
          {/* <div id="doctor">
            <MDBAnimation type="lightSpeedIn" delay=".4s">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/Medical_doctor.png"
                alt=""
                className="img-fluid"
              />
            </MDBAnimation>
          </div> */}
        </div>
        <div id="second">
          <div id="whoRwe">
            <h1>מי אנחנו?</h1>
            <h2>
              בעידן שבו זני הקנאביס משתנים מרגע לרגע, חברות הקנאביס אין עקביות
              בזני ובאופי האצווה
            </h2>
          </div>
        </div>
        <div id="third"></div>
      </body>
    );
  }
}

export default AppPage;
