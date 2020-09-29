import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";
import _ from "lodash";
import httpService from "../services/httpService";

class MultiCarouselPage extends Component {
  state = {
    someProducts: [],
  };

  componentDidMount = async () => {
    const allProducts = await httpService.getAllProducts();
    await this.setState({
      someProducts: _.chunk(allProducts.data, 3),
    });
  };

  render() {
    return (
      <div>
        <MDBContainer>
          <MDBCarousel
            activeItem={2}
            length={3}
            slide={true}
            showControls={false}
            showIndicators={true}
            multiItem={true}
            thumbnails={true}
            interval={2000}
            multiItem={true}
          >
            <MDBCarouselInner>
              <MDBRow>
                {this.state.someProducts.map((threeProducts, index1) => (
                  <div style={{ margin: 20 }}>
                    <MDBCarouselItem itemId={index1 + 1}>
                      <MDBRow>
                        {threeProducts.map((singleProduct, index2) => (
                          <MDBCol middle md="4" id={index2}>
                            <div style={{ margin: 10 }}>
                              <MDBCard cascade narrow>
                                <MDBCardImage
                                  className="img-fluid"
                                  src={singleProduct.BoxImg}
                                />
                                <MDBCardBody>
                                  <MDBCardTitle>
                                    {singleProduct.name}
                                  </MDBCardTitle>
                                  <MDBCardText>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                  </MDBCardText>
                                  <MDBBtn color="white">MDBBtn</MDBBtn>
                                </MDBCardBody>
                              </MDBCard>
                            </div>
                          </MDBCol>
                        ))}
                      </MDBRow>
                    </MDBCarouselItem>
                  </div>
                ))}
              </MDBRow>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </div>
    );
  }
}

export default MultiCarouselPage;
