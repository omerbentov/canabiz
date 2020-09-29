import React, { Component } from "react";
import ProductView from "../components/ProductView";
import SocialNewsFeed from "../components/SocialNewsFeed";
import "../styles/ProductPage.css";
import StatisticsForProducts from "./../components/StatisticsForProduct";
import httpService from "../services/httpService";

class ProductPage extends Component {
  state = {
    product: [],
    commentsCategories: [
      "מצב רוח",
      "מרדים",
      "מעורר",
      "פוסט טראומה",
      "שינה",
      "מעורר",
      "הלם קרב",
      "תיאבון",
      "חרדה",
      "כאב ראש",
      "עייפות",
      "שיעול",

      "טעם",
      "ניחוח",
      "גודל",

      "יום",
      "לילה",
      "עבודה",
    ],
  };

  async componentDidMount() {
    const product = await httpService.getProductByID(
      this.props.match.params.id
    );
    await this.setState({ product: product.data[0] });
  }

  render() {
    return (
      <div id="productpage">
        <ProductView {...this.state.product} />
        <div id="social_news_feed">
          <StatisticsForProducts
            commentsCategories={this.state.commentsCategories}
            product_id={this.state.product._id}
          />
          <SocialNewsFeed
            product_id={this.state.product._id}
            commentsCategories={this.state.commentsCategories}
          />
        </div>
      </div>
    );
  }
}

export default ProductPage;
