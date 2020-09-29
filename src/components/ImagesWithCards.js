import React, { Component, useState } from "react";
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
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import httpService from "../services/httpService";

class CardExample extends Component {
  state = {
    allProducts: [],
    products: [],
    allComments: [],
    allCompenies: [],

    query: {
      ish: ["indica", "sativa", "hybrid"],
      thc: ["20", "15", "10"],
      companies: [],
    },

    options: {
      ish: [
        { label: "אינדיקה", value: "indica" },
        { label: "סאטיבה", value: "sativa" },
        { label: "הייבריד", value: "hybrid" },
      ],
      thc: [
        { label: "T/20", value: "20" },
        { label: "T/15", value: "15" },
        { label: "T/10", value: "10" },
      ],
      companies: [],
    },
  };

  async componentDidMount() {
    const allProducts = await httpService.getAllProducts();
    await this.setState({
      allProducts: allProducts.data,
      products: allProducts.data,
    });

    const allCompenies = await httpService.getAllCompenies();
    allCompenies.data.forEach((company) => {
      this.state.options.companies.push({
        label: company.name,
        value: company.name,
      });

      this.state.query.companies.push(company.name);
      this.state.allCompenies.push(company.name);
    });
  }

  ish_btnClicked = async (val) => {
    if (!val) {
      this.state.query.ish = ["indica", "sativa", "hybrid"];
    } else {
      this.state.query.ish = val.split(",");
    }
    this.generateProductList();
  };

  thc_btnClicked = async (val) => {
    if (!val) {
      this.state.query.thc = ["20", "15", "10"];
    } else {
      this.state.query.thc = val.split(",");
    }
    this.generateProductList();
  };

  company_btnClicked = async (val) => {
    if (!val) {
      this.state.query.companies = this.state.allCompenies;
    } else {
      this.state.query.companies = val.split(",");
    }
    this.generateProductList();
  };

  generateProductList = () => {
    var productsAfterQuery = this.state.allProducts.filter((product) => {
      return (
        _.includes(this.state.query.ish, product.ish) &&
        _.includes(this.state.query.thc, product.thc) &&
        _.includes(this.state.query.companies, product.company)
      );
    });

    this.state.products = productsAfterQuery;
  };

  render() {
    return (
      <div id="images_with_cards">
        <div id="head">
          <div style={{ margin: "auto", width: "fit-content", paddingTop: 20 }}>
            <h1> סנן מוצרים</h1>
          </div>
          <div id="filter">
            <MDBRow>
              <MultiSelect
                placeholder="משפחה"
                onChange={this.ish_btnClicked}
                options={this.state.options.ish}
              />
              <MultiSelect
                placeholder="Thc"
                onChange={this.thc_btnClicked}
                options={this.state.options.thc}
              />
              <MultiSelect
                placeholder="חברה"
                onChange={this.company_btnClicked}
                options={this.state.options.companies}
              />
            </MDBRow>
          </div>
        </div>
        <div id="main">
          <div style={{ margin: "auto", width: "fit-content", paddingTop: 20 }}>
            <h1>מוצרים</h1>
          </div>
          <div id="products">
            <MDBTable>
              <MDBRow>
                {this.state.products.map((product, index) => (
                  <MDBCol key={index}>
                    <div id="singleCard">
                      <MDBCard id={index}>
                        <MDBCardImage
                          className="img-fluid"
                          src={product.BoxImg}
                        />
                        <div
                          style={{
                            width: "100%",
                            backgroundColor: "whitesmoke",
                          }}
                        >
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
                            <MDBBtn
                              color="white"
                              id="btn"
                              href={"/product/" + product._id}
                            >
                              לצפייה
                            </MDBBtn>
                          </MDBCardBody>
                        </div>
                      </MDBCard>
                    </div>
                  </MDBCol>
                ))}
              </MDBRow>
            </MDBTable>
          </div>
        </div>
      </div>
    );
  }
}

export default CardExample;
