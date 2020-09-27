import React, { Component } from "react";
import {
  MDBCard,
  MDBIcon,
  MDBRating,
  MDBRow,
  MDBTable,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
} from "mdbreact";
import ProgressBar from "react-customizable-progressbar";

class SingleSocialComment extends Component {
  state = {};

  getProgressBarColor = (ratio) => {
    console.log(ratio);
    switch (Math.floor(ratio)) {
      case 1:
        return "#c8e6c9";
      case 2:
        return "#81c784";
      case 3:
        return "green";
      case 4:
        return "#388e3c";
      case 5:
        return "#1b5e20";
    }
  };

  render() {
    return (
      <MDBCard className="mdb-feed py-3 px-md-5">
        <div className="news">
          <div className="label" style={{ marginBottom: 20 }}>
            <img
              src="https://i.imgur.com/eLoV5gEt.png"
              width="50"
              height="50"
              alt=""
              className="rounded-circle z-depth-1-half"
            />
          </div>
          <div className="excerpt">
            <div style={{ marginBottom: 20 }}>
              <MDBRow>
                <a href="#!" className="name">
                  User id : {this.props.user_id}
                </a>{" "}
              </MDBRow>
              {/* <MDBCardTitle className="date">{this.props.title}</MDBCardTitle> */}
              {this.props.message}
            </div>
            <div id="scores">
              <MDBRow>
                {this.props.score
                  .sort((a, b) => a.value >= b.value)
                  .map((scoreElement, index) => (
                    <MDBCol key={index}>
                      <p>{scoreElement.title}</p>
                      <ProgressBar
                        radius={20}
                        progress={scoreElement.value}
                        steps={5}
                        strokeWidth={4}
                        strokeColor={this.getProgressBarColor(
                          scoreElement.value
                        )}
                        trackStrokeWidth={4}
                        pointerRadius={4}
                        pointerStrokeWidth={2}
                        pointerStrokeColor="black"
                        initialAnimationDelay={500}
                        initialAnimation={true}
                      ></ProgressBar>
                    </MDBCol>
                  ))}
              </MDBRow>
            </div>

            <div>תאריך :{this.props.date.substring(0, 10)}</div>
          </div>
        </div>
      </MDBCard>
    );
  }
}

export default SingleSocialComment;
