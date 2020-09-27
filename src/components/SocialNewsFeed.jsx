import React from "react";
import { MDBRow, MDBCard, MDBCardBody } from "mdbreact";
import SingleSocialComment from "./SingleSocialComment";
import axios from "axios";
import AddComment from "./AddComment";

class SocialNewsFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = { comments: [], fetch: true };
  }

  getComments = async (product_id) => {
    var url = `http://localhost:3000/comments/byProduct/${product_id}`;
    const comments = await axios.get(url);
    await this.setState({ comments: comments.data, fetch: false });
  };

  AddComment = async (comment) => {
    this.state.comments.unshift(comment);
    await this.setState({ comments: this.state.comments });
  };

  render() {
    if (this.props.product_id !== undefined && this.state.fetch) {
      this.getComments(this.props.product_id);
    }

    return (
      <div
        style={{
          width: "70%",
          margin: "auto",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        <AddComment addComment={this.AddComment} {...this.props} />
        {this.state.comments.map((comment, index) => (
          <MDBCardBody key={index}>
            <MDBRow>
              <SingleSocialComment {...comment} />
            </MDBRow>
          </MDBCardBody>
        ))}
      </div>
    );
  }
}

export default SocialNewsFeed;
