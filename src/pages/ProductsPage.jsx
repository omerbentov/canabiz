import React, { Component } from "react";
import ImagesWithCards from "../components/ImagesWithCards";
import httpService from "../services/httpService";

class ProductsPage extends Component {
  state = {
    comments: [],
  };

  getComments = async (product_id) => {
    const comments = await httpService.getCommentsByID(product_id);
    await this.setState({ comments: comments.data, fetch: false });
  };

  render() {
    this.getComments();
    return <ImagesWithCards comments={this.state.comments} />;
  }
}

export default ProductsPage;
