import React, { Component } from "react";
import ImagesWithCards from "../components/ImagesWithCards";
import axios from "axios";

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
    return <ImagesWithCards comments={this.state.comments} />;
  }
}

export default ProductsPage;
