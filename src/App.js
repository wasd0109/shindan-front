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
      error: false,
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

  onClickBack = () => {
    const { currentQuestion, scores } = this.state;
    if (currentQuestion !== 0) {
      scores.pop();
      console.log(scores);
      this.setState({ currentQuestion: currentQuestion - 1, scores: scores });
    }
  };

  componentDidMount() {
    fetch("https://shindan-back.herokuapp.com/questions")
      .then((res) => res.json())
      .then((questions) => this.setState({ questions: questions }))
      .catch(() => this.setState({ error: true }));
    fetch("https://shindan-back.herokuapp.com/scores")
      .then((res) => res.json())
      .then((data) => this.setState({ average: Number(data[0].avg) }))
      .catch(() => this.setState({ error: true }));
  }

  render() {
    const {
      route,
      questions,
      currentQuestion,
      scores,
      siteLink,
      average,
      error,
    } = this.state;
    if (error) {
      return (
        <div className="justify-center p-32">
          <div className="bg-blue-500 text-center  text-3xl">
            發生錯誤
            <p className="text-2xl">
              請向
              <span>
                <a
                  href="https://www.facebook.com/wotasaidwhat9"
                  className="text-white  "
                >
                  ヲタ噏乜9專頁
                </a>
              </span>
              報告
            </p>
          </div>
        </div>
      );
    }
    if (route === "start") {
      return (
        <div className="flex justify-center">
          <div
            id="container"
            className="my-2 flex text-center m-auto justify-center"
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
            className="my-2 flex text-center m-auto justify-center"
          >
            <Questions
              question={questions[currentQuestion]}
              onClickAnswer={this.onClickAnswer}
              onClickBack={this.onClickBack}
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
            className="my-2 flex text-center m-auto justify-center"
          >
            <Result scores={scores} average={average} siteLink={siteLink} />
          </div>
        </div>
      );
    }
  }
}
