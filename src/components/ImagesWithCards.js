import React, { Component, useState } from "react";
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
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

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
    const allProducts = await axios.get("http://localhost:3000/products/all");
    await this.setState({
      allProducts: allProducts.data,
      products: allProducts.data,
    });

    const allCompenies = await axios.get("http://localhost:3000/compenies");
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
        <div style={{ margin: "auto" }}>
          <MultiSelect
            onChange={this.ish_btnClicked}
            options={this.state.options.ish}
          />
          <MultiSelect
            onChange={this.thc_btnClicked}
            options={this.state.options.thc}
          />
          <MultiSelect
            onChange={this.company_btnClicked}
            options={this.state.options.companies}
          />
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
