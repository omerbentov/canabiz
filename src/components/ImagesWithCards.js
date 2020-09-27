import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBIcon,
} from "mdbreact";
import "../styles/ImagesWithCards.css";

class CardExample extends Component {
  state = {
    allProducts: [],
    products: [],
    allCompenies: [],
    compenies: [],
    allComments: [],

    initQuery: {
      ish: ["indica", "sativa", "hybrid"],
      thc: ["15", "20"],
    },
    query: {
      ishFirstClick: true,
      thcFirstClick: true,
      companyFirstClick: true,
      ish: ["indica", "sativa", "hybrid"],
      thc: ["15", "20"],
    },
  };

  async componentDidMount() {
    const allProducts = await axios.get("http://localhost:3000/products/all");
    await this.setState({
      allProducts: allProducts.data,
      products: allProducts.data,
    });

    const allCompenies = await axios.get("http://localhost:3000/compenies");
    let companyNames = [];
    allCompenies.data.forEach((company) => {
      companyNames.push(company.name);
    });

    await this.setState({
      allCompenies: companyNames,
      compenies: companyNames,
    });
  }

  ish_btnClicked = async (e) => {
    console.log(e.currentTarget);
    if (this.state.query.ishFirstClick) {
      this.state.products = this.state.allProducts;
      this.state.query.ish = [];
      this.state.query.ishFirstClick = false;
    }

    this.state.query.ish.indexOf(e.currentTarget.name) === -1
      ? this.state.query.ish.push(e.currentTarget.name)
      : _.remove(this.state.query.ish, (item) => {
          return item == e.currentTarget.name;
        });

    if (this.state.query.ish.length == 0) {
      this.state.query.ish = this.state.initQuery.ish;
      this.state.query.ishFirstClick = true;
    }

    console.log(this.state.query.ish);
    this.generateProductList();
  };

  thc_btnClicked = async (e) => {
    if (this.state.query.thcFirstClick) {
      this.state.products = this.state.allProducts;
      this.state.query.thc = [];
      this.state.query.thcFirstClick = false;
    }

    this.state.query.thc.indexOf(e.currentTarget.name) === -1
      ? this.state.query.thc.push(e.currentTarget.name)
      : _.remove(this.state.query.thc, (item) => {
          return item == e.currentTarget.name;
        });

    if (this.state.query.thc.length == 0) {
      this.state.query.thc = this.state.initQuery.thc;
      this.state.query.thcFirstClick = true;
    }

    console.log(this.state.query.thc);
    this.generateProductList();
  };

  company_btnClicked = async (e) => {
    if (this.state.query.companyFirstClick) {
      // this.state.compenies = this.state.allCompenies;
      this.state.compenies = [];
      this.state.query.companyFirstClick = false;
    }

    this.state.compenies.indexOf(e.currentTarget.name) === -1
      ? this.state.compenies.push(e.currentTarget.name)
      : _.remove(this.state.compenies, (item) => {
          return item == e.currentTarget.name;
        });

    if (this.state.compenies.length == 0) {
      this.state.compenies = this.state.allCompenies;
      this.state.query.companyFirstClick = true;
    }

    console.log(this.state.compenies);
    this.generateProductList();
  };

  generateProductList = () => {
    var productsAfterQuery = this.state.allProducts.filter(
      (product) =>
        this.state.query.ish.includes(product.ish) &&
        this.state.query.thc.includes(product.thc) &&
        this.state.compenies.includes(product.company)
    );

    this.setState({ products: productsAfterQuery });
  };

  resetState = async () => {
    let tempQuery = this.state.query;
    tempQuery.ishFirstClick = true;
    tempQuery.thcFirstClick = true;
    tempQuery.companyFirstClick = true;
    tempQuery.ish = this.state.initQuery.ish;
    tempQuery.thc = this.state.initQuery.thc;
    await this.setState({
      compenies: this.state.allCompenies,
      query: tempQuery,
    });

    this.generateProductList();
  };

  render() {
    return (
      <div id="images_with_cards">
        <div id="filter">
          <MDBCard>
            <div id="header">
              <h1 className="black-text">סנן מוצרים</h1>
            </div>
            <div id="allFiltersButtons">
              <MDBRow>
                <div id="filterCard1">
                  <MDBCard color="green" className="m-3">
                    <MDBBtn
                      innerRef={this.buttonRef}
                      color="white"
                      className="btn-sm"
                      name="sativa"
                      onClick={this.ish_btnClicked}
                    >
                      סאטיבה
                    </MDBBtn>
                    <MDBBtn
                      color="white"
                      className="btn-sm"
                      name="indica"
                      onClick={this.ish_btnClicked}
                    >
                      אינדיקה
                    </MDBBtn>

                    <MDBBtn
                      color="white"
                      className="btn-sm"
                      name="hybrid"
                      onClick={this.ish_btnClicked}
                    >
                      הייבריד
                    </MDBBtn>
                  </MDBCard>
                </div>
                <div id="filterCard2">
                  <MDBCard color="green" className="m-3">
                    <MDBBtn
                      color="white"
                      className="btn-sm"
                      name="20"
                      onClick={this.thc_btnClicked}
                    >
                      THC - 20
                    </MDBBtn>
                    <MDBBtn
                      color="white"
                      className="btn-sm"
                      name="15"
                      onClick={this.thc_btnClicked}
                    >
                      THC - 15
                    </MDBBtn>
                    <MDBBtn
                      color="white"
                      className="btn-sm"
                      name="10"
                      onClick={this.thc_btnClicked}
                    >
                      THC - 10
                    </MDBBtn>
                  </MDBCard>
                </div>
                <div id="filterCard3">
                  <MDBCard color="green" className="m-3">
                    {this.state.allCompenies.map((company, index) => (
                      <MDBBtn
                        id={index}
                        color="white"
                        className="btn-sm"
                        name={company}
                        onClick={this.company_btnClicked}
                      >
                        {company}
                      </MDBBtn>
                    ))}
                  </MDBCard>
                </div>
                <div id="filterCard">
                  <MDBCard color="red" className="m-3">
                    <MDBBtn
                      color="white"
                      className="btn-sm"
                      onClick={this.resetState}
                    >
                      איפוס
                    </MDBBtn>
                  </MDBCard>
                </div>
              </MDBRow>
            </div>
          </MDBCard>
        </div>

        <div id="products">
          <MDBTable>
            <MDBRow>
              {this.state.products.map((product, index) => (
                <MDBCol>
                  <div id="singleCard">
                    <MDBCard id={index}>
                      <MDBCardImage
                        className="img-fluid"
                        src={product.BoxImg}
                      />
                      <MDBCardBody cascade>
                        <MDBCardTitle>
                          {product.name} : ({product.company})
                        </MDBCardTitle>
                        <MDBCardTitle>
                          {" "}
                          {product.ish} T{product.thc}\C
                          {product.cbd}
                        </MDBCardTitle>
                        <MDBCardText id="description">
                          {product.productDescription}
                        </MDBCardText>
                        <MDBBtn id="btn" href={"/product/" + product._id}>
                          לצפייה
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBTable>
        </div>
      </div>
    );
  }
}

export default CardExample;
