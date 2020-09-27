import React from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBInput,
  MDBRating,
  MDBTable,
  MDBRow,
  MDBCol,
  MDBCardTitle,
} from "mdbreact";

class AddComment extends React.Component {
  state = {
    comment: {
      title: "",
      message: "",
    },
    score: [],
  };

  postComment = async () => {
    console.log("in");
    const res = await axios.post(
      "http://localhost:3000/comments",
      this.comment
    );

    console.log(res);
    this.state = { ...res };
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    let errorMessage;
    if (this.state.comment.title == "" || this.state.comment.message == "") {
      alert("אנא הזן כותרת ותגובה  :) ");
    }

    const { addComment } = this.props;
    addComment({
      _id: null,
      product_id: this.props.product_id,
      user_id: 2,
      title: this.state.comment.title,
      message: this.state.comment.message,
      score: this.state.score,
      date: "Added just now...",
    });

    try {
      const response = await axios.post("http://localhost:3000/comments", {
        product_id: this.props.product_id,
        user_id: 2,
        title: this.state.comment.title,
        message: this.state.comment.message,
        score: this.state.score,
      });

      // reset
      this.state.comment.title = "";
      this.state.comment.message = "";
      this.state.score = [];
      alert(response.data);
    } catch (e) {
      alert(e);
    }
  };

  handleTextChange = (e) => {
    const comment = { ...this.state.comment };
    comment[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ comment });
    console.log(comment);
  };

  handleRateChange = (e) => {
    var exists = false;
    const score = this.state.score;
    if (this.state.score.length > 0) {
      this.state.score.forEach((element) => {
        if (element.title == e.title) {
          element.value = e.value;
          exists = true;
        }
      });
    }

    if (e.value && !exists) {
      score.push({ title: e.title, value: e.value });
    }
  };

  render() {
    return (
      <MDBCard className="mt-5">
        <h1 className=" position-relative text-center black-text">
          הוסף תגובה
        </h1>
        <MDBRow className="ml-3">
          <MDBInput
            background
            label="כותרת"
            type="text"
            ref={this.title}
            name="title"
            value={this.state.comment.title}
            onChange={this.handleTextChange}
          ></MDBInput>
        </MDBRow>
        <MDBRow>
          <MDBInput
            background
            label="תגובה"
            size="lg"
            type="textarea"
            ref={this.title}
            name="message"
            value={this.state.comment.message}
            onChange={this.handleTextChange}
          ></MDBInput>
        </MDBRow>
        {this.props.commentsCategories.map((category, index) => (
          <MDBRow key={index}>
            <p>{category}</p>
            <MDBRating
              key={index * 100}
              fillColors={[
                "red-text",
                "orange-text",
                "yellow-text",
                "lime-text",
                "light-green-text",
              ]}
              data={[
                {
                  tooltip: category,
                },
                {
                  tooltip: category,
                },
                {
                  tooltip: category,
                },
                {
                  tooltip: category,
                },
                {
                  tooltip: category,
                },
              ]}
              getValue={this.handleRateChange.bind(category)}
              name={category}
            />
          </MDBRow>
        ))}
        <MDBRow>
          <div className="text-center">
            <MDBBtn className="text-center" onClick={this.handleSubmit}>
              הגב
            </MDBBtn>
          </div>
        </MDBRow>
      </MDBCard>
    );
  }
}

export default AddComment;
