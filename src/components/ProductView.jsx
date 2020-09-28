import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
  MDBBtn,
} from "mdbreact";
import ReactDOM from "react-dom";
import Coverflow from "react-coverflow";

class ProductView extends Component {
  state = {};

  render() {
    return (
      <div dir="ltr" style={{ backgroundColor: "whitesmoke" }}>
        <div
          style={{
            margin: "auto",
            width: "fit-content",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <h1>{this.props.name}</h1>
        </div>
        <Coverflow
          width="100%"
          height="500"
          displayQuantityOfSide={2}
          navigation={true}
          enableScroll={true}
          clickable={true}
          active={0}
          infiniteScroll
        >
          <img
            src={this.props.BoxImg}
            alt={this.props.company}
            data-action="http://andyyou.github.io/react-coverflow/"
          />
          <img
            src={this.props.FlowerImg}
            alt={`${this.props.ish} : T\\${this.props.thc}-C\\${this.props.cbd}`}
            data-action="http://andyyou.github.io/react-coverflow/"
          />
        </Coverflow>

        <div
          style={{
            width: "70%",
            margin: "auto",
            marginTop: 10,
            marginBottom: 20,
          }}
        ></div>
      </div>
    );
  }
}

export default ProductView;
