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

class ProductView extends Component {
  state = {};
  render() {
    return (
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody className="text-center">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            {this.props.name}
          </h2>
          <p className="text-center w-resspanonsive mx-auto mb-5">
            {this.props.description}
          </p>
          <MDBRow>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img className="img-fluid" src={this.props.BoxImg} alt="" />
                <MDBMask overlay="white-slight" />
              </MDBView>
              <h4 className="font-weight-bold mb-3 green-text">
                <strong>{this.props.company}</strong>
              </h4>
              <p className="dark-grey-text">{this.props.companyDescription}</p>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img className="img-fluid" src={this.props.FlowerImg} alt="" />
                <MDBMask overlay="white-slight" />
              </MDBView>
              <h4 className="font-weight-bold mb-3 green-text">
                <strong>תיאור</strong>
              </h4>
              <p className="dark-grey-text">{this.props.productDescription}</p>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"
                  alt=""
                />
                <MDBMask overlay="white-slight" />
              </MDBView>
              <h4 className="font-weight-bold mb-3 gree-text">
                <strong>מאפיינים</strong>
              </h4>
              <p className="dark-grey-text" />
              <MDBRow>
                <MDBCol>
                  <MDBBtn>{this.props.ish}</MDBBtn>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <MDBBtn>THC : {this.props.thc}</MDBBtn>
                </MDBCol>
                <MDBCol>
                  <MDBBtn>CBD : {this.props.cbd}</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default ProductView;
