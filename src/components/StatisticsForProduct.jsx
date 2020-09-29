import React, { Component } from "react";
import { MDBCard, MDBRow, MDBCol, MDBSimpleChart, MDBIcon } from "mdbreact";
import _, { round } from "lodash";
import ProgressBar from "react-customizable-progressbar";
import httpService from "../services/httpService";

class StatisticsForProducts extends Component {
  state = {
    scores: [],
    comments: [],
    statistics: [],
    fetch: true,
  };

  getStatistics = async (product_id) => {
    // fetch comments
    const comments = await httpService.getCommentsByID(product_id);
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

  getProgressBarColor = (ratio) => {
    console.log(ratio);
    switch (Math.floor(ratio)) {
      case 0:
        return "#c8e6c9";
      case 0:
        return "#81c784";
      case 2:
        return "green";
      case 3:
        return "#388e3c";
      case 4:
        return "#1b5e20";
    }
  };

  render() {
    if (this.props.product_id !== undefined && this.state.fetch) {
      this.getStatistics(this.props.product_id);
    }

    console.log(this.state.statistics);
    return (
      <div
        style={{
          width: "70%",
          margin: "auto",
          marginTop: 10,
          marginBottom: 20,
        }}
      >
        <MDBCard>
          <div
            style={{
              marginRight: 30,
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <MDBRow>
              <h1 className=" position-relative text-center black-text">
                סטטיסטיקות
              </h1>
            </MDBRow>
            <MDBRow>
              {this.state.statistics
                .sort((a, b) => a.value >= b.value)
                .map((rate, index) => (
                  <div
                    className="ml-5"
                    key={index}
                    style={{ marginBottom: 10, padding: 20 }}
                  >
                    <MDBCol>
                      <MDBRow center>
                        <h3>
                          {rate.title} :{round((rate.value / 5) * 100, 2)}%{" "}
                        </h3>
                      </MDBRow>
                      <MDBRow center>
                        <h4>מס מדרגים : {rate.counter}</h4>
                      </MDBRow>
                      <ProgressBar
                        radius={50}
                        progress={rate.value}
                        steps={5}
                        strokeWidth={4}
                        strokeColor={this.getProgressBarColor(rate.value)}
                        trackStrokeWidth={4}
                        pointerRadius={8}
                        pointerStrokeWidth={5}
                        pointerStrokeColor="black"
                        initialAnimationDelay={500}
                        initialAnimation={true}
                      ></ProgressBar>
                    </MDBCol>
                  </div>
                ))}
            </MDBRow>
          </div>
        </MDBCard>
      </div>
    );
  }
}

export default StatisticsForProducts;
