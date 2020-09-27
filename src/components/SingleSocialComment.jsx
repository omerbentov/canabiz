import React, { Component } from "react";
import {
  MDBCard,
  MDBIcon,
  MDBRating,
  MDBRow,
  MDBTable,
  MDBCardBody,
  MDBCardTitle,
} from "mdbreact";

class SingleSocialComment extends Component {
  state = {};

  render() {
    return (
      <MDBCard className="mdb-feed py-3 px-md-5">
        <div className="news">
          <div className="label">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
              alt=""
              className="rounded-circle z-depth-1-half"
            />
          </div>
          <div className="excerpt">
            <div className="brief">
              <a href="#!" className="name">
                User id : {this.props.user_id}
              </a>{" "}
              <MDBCardTitle className="date">{this.props.title}</MDBCardTitle>
              <MDBCardBody className="date">{this.props.message}</MDBCardBody>
            </div>
            <div id="scores">
              {this.props.score
                .sort((a, b) => a.value >= b.value)
                .map((scoreElement, index) => (
                  <MDBRow key={index}>
                    <p>{scoreElement.title}</p>
                    <MDBRating
                      fillColors={[
                        "red-text",
                        "orange-text",
                        "yellow-text",
                        "lime-text",
                        "light-green-text",
                      ]}
                      data={[
                        {
                          tooltip: "Bad",
                          choosed:
                            scoreElement.value >= 1 && scoreElement.value < 2,
                        },
                        {
                          tooltip: "Poor",
                          choosed:
                            scoreElement.value >= 2 && scoreElement.value < 3,
                        },
                        {
                          tooltip: "Ok",
                          choosed:
                            scoreElement.value >= 3 && scoreElement.value < 4,
                        },
                        {
                          tooltip: "Nice",
                          choosed:
                            scoreElement.value >= 4 && scoreElement.value < 5,
                        },
                        {
                          tooltip: "Excellent",
                          choosed: scoreElement.value == 5,
                        },
                      ]}
                    />
                  </MDBRow>
                ))}
            </div>
            <div className="feed-footer">
              <a href="#!" className="like">
                <MDBIcon icon="heart" />
              </a>
              <div>{this.props.date}</div>
            </div>
          </div>
        </div>
      </MDBCard>
    );
  }
}

export default SingleSocialComment;
