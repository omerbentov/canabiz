import React from "react";
import ReactDOM from "react-dom";
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
import Typist from "react-typist";
import ScrollAnimation from "react-animate-on-scroll";

class AppPage extends React.Component {
  render() {
    return (
      <body>
        {/* {!localStorage.getItem("token") && ( */}
        <div id="first">
          <div id="welcom" style={{ fontSize: 30, fontFamily: "Alef Hebrew" }}>
            <Typist>
              <span className="my-custom-class">
                {" "}
                ברוכים הבאים לאתר קנאביז :)
              </span>
              <Typist.Delay ms={1200} />
              <br />
              <span className="my-custom-class">נמאס שמשקרים לנ</span>
              <Typist.Backspace count={15} delay={200} />
              <span className="my-custom-class">חברות הקנאביס בארץ משקרו</span>
              <Typist.Backspace count={24} delay={200} />
              <span className="my-custom-class">אצלינו,</span>
              <Typist.Delay ms={200} />
              <br />
              <span className="my-custom-class">
                תוכלו למצוא המידע האמיתי אודות הפרחים שאנחנו קונים
              </span>
              <br />
              <span className="my-custom-class">ובעזרתכם,</span>
              <Typist.Delay ms={200} />
              <br />
              <span className="my-custom-class">
                נעזור אחד לשניה למצוא את הטיפול המתאים ביותר עבורו
              </span>
              <br />
              <span className="my-custom-class">הרבה בריאות</span>
            </Typist>
            <MDBAnimation type="fadeInRight" delay=".3s">
              <MDBBtn href="/signin" color="white">
                כניסה
              </MDBBtn>
              <MDBBtn href="/signup" color="white">
                הרשמה
              </MDBBtn>
            </MDBAnimation>
          </div>
        </div>
        )}
        <div id="second">
          <ScrollAnimation animateIn="bounceInLeft" animateOut="fadOut">
            <div id="whoRwe">
              <h1>מי אנחנו?</h1>
              <h2>
                בעידן שבו זני הקנאביס משתנים מרגע לרגע, חברות הקנאביס אין עקביות
                בזני ובאופי האצווה
              </h2>
            </div>
          </ScrollAnimation>
        </div>
        <div dir="ltr" id="third">
          <ScrollAnimation delay={500} animateIn="tada" initiallyVisible={true}>
            <div style={{ margin: "auto", width: "20%" }}>
              <h1> הנצפים ביותר</h1>
            </div>
          </ScrollAnimation>
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
