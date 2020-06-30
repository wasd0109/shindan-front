import React, { Component } from "react";
import Start from "./components/Start";
import Questions from "./components/Question";
import Result from "./components/Result";
import ReactGA from "react-ga";
import "./App.css";
import "./output.css";

ReactGA.initialize("UA-171012457-2");
ReactGA.pageview(window.location.pathname + window.location.search);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      route: "start",
      currentQuestion: 0,
      questions: [],
      scores: [],
      siteLink: "https://wota-shindan.netlify.app/",
      average: 0,
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

  componentDidMount() {
    fetch("https://shindan-back.herokuapp.com/questions")
      .then((res) => res.json())
      .then((questions) => this.setState({ questions: questions }));
    fetch("https://shindan-back.herokuapp.com/scores")
      .then((res) => res.json())
      .then((data) => this.setState({ average: Number(data[0].avg) }));
  }

  render() {
    const {
      route,
      questions,
      currentQuestion,
      scores,
      siteLink,
      average,
    } = this.state;
    if (route === "start") {
      return (
        <div className="flex justify-center">
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
            <Result scores={scores} average={average} siteLink={siteLink} />
          </div>
        </div>
      );
    }
    return <div>Error</div>;
  }
}
