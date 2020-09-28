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
import MultiCarouselPage from "./../components/MultiCarouselPage ";

class AppPage extends React.Component {
  render() {
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
        <div dir="ltr" id="third">
          <div style={{ margin: "auto", width: "20%" }}>
            <h1> הנצפים ביותר</h1>
          </div>
          <div id="carusel">
            <MultiCarouselPage />
          </div>
        </div>
        <div id="fourth"></div>
      </body>
    );
  }
}

export default AppPage;
