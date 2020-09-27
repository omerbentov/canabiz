import React, { Component } from "react";
import ImagesWithCards from "../components/ImagesWithCards";
import axios from "axios";
import "../styles/ProductsPage.css";

class ProductsPage extends Component {
  state = {
    comments: [],
  };

  getComments = async (product_id) => {
    var url = `http://localhost:3000/comments/byProduct/${product_id}`;
    const comments = await axios.get(url);
    await this.setState({ comments: comments.data, fetch: false });
  };

  render() {
    this.getComments();
    return (
      <div id="main">
        <ImagesWithCards comments={this.state.comments} />
      </div>
    );
  }
}

export default ProductsPage;
