import React from "react";
import axios from "axios";
import _ from "lodash";
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
    if (this.state.comment.message == "") {
      alert("אנא הזן תגובה  :) ");
    } else {
      const { addComment } = this.props;
      addComment({
        _id: null,
        product_id: this.props.product_id,
        user_id: 2,
        message: this.state.comment.message,
        score: this.state.score,
        date: "Added just now...",
      });

      try {
        const response = await axios.post("http://localhost:3000/comments", {
          product_id: this.props.product_id,
          user_id: 2,
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
      <div style={{ maxWidth: "70%", maxHeight: "30%", paddingRight: 5 }}>
        <MDBCard className="mt-5">
          <div
            style={{
              marginRight: 30,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <h4 className=" position-relative text-center black-text">
              הוסף תגובה
            </h4>
            {/* <MDBRow className="ml-3">
            <MDBInput
              size="lg"
              background
              label="כותרת"
              type="text"
              ref={this.title}
              name="title"
              value={this.state.comment.title}
              onChange={this.handleTextChange}
            ></MDBInput>
          </MDBRow> */}
            <MDBRow>
              <div style={{ width: "90%" }}>
                <MDBInput
                  background
                  label="תגובה"
                  type="textarea"
                  ref={this.title}
                  name="message"
                  value={this.state.comment.message}
                  onChange={this.handleTextChange}
                ></MDBInput>
              </div>
            </MDBRow>
            <MDBRow>
              {_.chunk(this.props.commentsCategories, 5).map(
                (categories, index) => (
                  <MDBCol size="lg">
                    {categories.map((category, index) => (
                      <MDBRow key={index}>
                        <h6>{category}</h6>
                        <MDBRating
                          iconSize="1x"
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
                  </MDBCol>
                )
              )}
            </MDBRow>
            <MDBRow>
              <div className="text-center">
                <MDBBtn
                  color="white"
                  className="text-center"
                  onClick={this.handleSubmit}
                >
                  הגב
                </MDBBtn>
              </div>
            </MDBRow>
          </div>
        </MDBCard>
      </div>
    );
  }
}

export default AddComment;
