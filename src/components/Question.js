import React from "react";
import ReactLoading from "react-loading";
import backBtn from "../assets/backBtn.png";
import images from "../assets/questions/index";

function Question({
  question,
  onClickAnswer,
  onClickFinalAnswer,
  onClickBack,
}) {
  if (question === undefined) {
    return (
      <div className="flex justify-center pt-48 align-middle py-8 border-8 border-blue-400 w-11/12 ">
        <ReactLoading type="spin" color="#000000" height={100} width={100} />
      </div>
    );
  }

  const { questiontitle, choice, score, id } = question;
  const choices = choice.split("/");
  const scores = score.split("/");
  const title = questiontitle.split(" ");
  return (
    <div className="pt-2 border-8 border-blue-400 w-10/12 flex flex-col">
      <input
        src={backBtn}
        type="image"
        alt="back button"
        className="w-6 ml-2 p-0 m-0"
        onClick={onClickBack}
      />
      <div className="image">
        <img
          src={images[id - 1]}
          alt="ガチ恋イラスト"
          className="h-64 m-auto"
        />
      </div>
      <div id="question">
        <h1 className="text-xl ">{title[0]}</h1>
        <h1 className="text-xl ">{title[1]}</h1>
      </div>
      <button
        id={scores[0]}
        onClick={onClickAnswer}
        className="uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
      >
        {choices[0]}
      </button>
      <button
        id={scores[1]}
        onClick={onClickAnswer}
        className="uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
      >
        {choices[1]}
      </button>
    </div>
  );
}

export default Question;
