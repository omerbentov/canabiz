import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";

class CarouselPage extends React.Component {
  state = {
    product: {},
  };

  render() {
    console.log(this.props);

    return (
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  //src={this.props.CaruselaImg}
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">{this.props.name}</h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">{this.props.name}</h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                  alt="Third slide"
                />
                <MDBMask overlay="black-slight" />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive">{this.props.name}</h3>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    );
  }
}

export default CarouselPage;
