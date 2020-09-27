import React, { Component } from "react";
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
  MDBRating,
} from "mdbreact";
import axios from "axios";
import _ from "lodash";

class StatisticsForProducts extends Component {
  state = {
    scores: [],
    comments: [],
    statistics: [],
    fetch: true,
  };

  getStatistics = async (product_id) => {
    // fetch comments
    var url = `http://localhost:3000/comments/byProduct/${product_id}`;
    const comments = await axios.get(url);
    await this.setState({ comments: comments.data, fetch: false });

    // creating only score array
    comments.data.forEach((comment) => {
      comment.score.forEach((c) => {
        this.state.scores.push(c);
      });
    });

    //take all comments and create new array which every ket is unique title/field
    this.state.scores = _.groupBy(this.state.scores, "title");
    console.log(this.state.scores);

    // find avarage
    var statistics = [];
    _.forIn(this.state.scores, function (multipulScores, key) {
      let sum = 0;
      let length = 0;
      multipulScores.forEach((singleScore) => {
        sum += singleScore.value;
        length++;
      });
      statistics.push({ title: key, value: sum / length, counter: length });
    });

    //set for render
    this.setState({ statistics });
  };

  render() {
    if (this.props.product_id !== undefined && this.state.fetch) {
      this.getStatistics(this.props.product_id);
    }

    return (
      <div>
        <MDBCard>
          <MDBRow>
            <MDBCardTitle>סטטיסטיקות</MDBCardTitle>
          </MDBRow>
          {this.state.statistics
            .sort((a, b) => a.value >= b.value)
            .map((rate, index) => (
              <div className="ml-5" key={index}>
                <MDBRow>
                  <MDBCardTitle>{rate.title}</MDBCardTitle>
                  <MDBRating
                    fillColors={[
                      "red-text",
                      "orange-text",
                      "yellow-text",
                      "lime-text",
                      "light-green-text",
                    ]}
                    data={[
                      {
                        tooltip: "Bad",
                        choosed: rate.value >= 1 && rate.value < 2,
                      },
                      {
                        tooltip: "Poor",
                        choosed: rate.value >= 2 && rate.value < 3,
                      },
                      {
                        tooltip: "Ok",
                        choosed: rate.value >= 3 && rate.value < 4,
                      },
                      {
                        tooltip: "Nice",
                        choosed: rate.value >= 4 && rate.value < 5,
                      },
                      {
                        tooltip: "Excellent",
                        choosed: rate.value == 5,
                      },
                    ]}
                  />
                  <MDBCardTitle>ממוצע{rate.value}</MDBCardTitle>
                  <MDBCardTitle>מס מדרגים :{rate.counter}</MDBCardTitle>
                </MDBRow>
              </div>
            ))}
        </MDBCard>
      </div>
    );
  }
}

export default StatisticsForProducts;
