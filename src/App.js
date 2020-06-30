import React, { Component } from "react";
import Start from "./components/Start";
import Questions from "./components/Question";
import Result from "./components/Result";
import "./App.css";
import "./output.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: "start",
      currentQuestion: 0,
      questions: [
        {
          id: 0,
          questionTitle: "試過一天有30分鐘以上在想推的事",
          choice: ["Yes", "No"],
          score: [1, 0],
        },
        {
          id: 1,
          questionTitle: "試過一天有30分鐘以上在想推的事!",
          choice: ["Yes", "No"],
          score: [1, 0],
        },
      ],
      scores: [],
      siteLink: "",
    };
  }

  onClickStart = () => {
    this.setState({
      route: "question",
    });
  };

  onClickAnswer = (event) => {
    const { currentQuestion, scores, questions } = this.state;
    const score = Number(event.currentTarget.id);
    scores.push(score);
    if (currentQuestion === questions.length - 1) {
      this.setState({ route: "result", scores: scores });
    } else {
      this.setState({ currentQuestion: currentQuestion + 1, scores: scores });
    }
  };

  render() {
    const { route, questions, currentQuestion, scores, siteLink } = this.state;

    if (route === "start") {
      return (
        <div className="flex justify-center ">
          <div
            id="container"
            className="my-24 flex text-center m-auto justify-center"
          >
            <Start
              onClickStart={this.onClickStart}
              startTitle={"測試一下你的ガチ恋程度"}
            />
          </div>
        </div>
      );
    }
    if (route === "question") {
      return (
        <div className="flex justify-center ">
          <div
            id="container"
            className="my-24 flex text-center m-auto justify-center"
          >
            <Questions
              question={questions[currentQuestion]}
              onClickAnswer={this.onClickAnswer}
            />
          </div>
        </div>
      );
    }

    if (route === "result") {
      return (
        <div className="flex justify-center ">
          <div
            id="container"
            className="my-24 flex text-center m-auto justify-center"
          >
            <Result scores={scores} siteLink={siteLink} />
          </div>
        </div>
      );
    }
    return <div>Error</div>;
  }
}
