import React from "react";
import ReactLoading from "react-loading";

function Question({ question, onClickAnswer }) {
  if (question === undefined) {
    return (
      <div className="flex justify-center pt-48 align-middle py-8 border-8 border-blue-400 w-11/12 ">
        <ReactLoading type="spin" color="#000000" height={100} width={100} />
      </div>
    );
  }

  const { questionTitle, choice, score } = question;
  const choices = choice.split("/");
  const scores = score.split("/");
  return (
    <div className=" py-8 border-8 border-blue-400 w-11/12">
      <img
        src=""
        alt="ガチ恋イラスト"
        className="w-64
 m-auto"
      />
      <h1 className="text-xl">{questionTitle}</h1>
      <button
        id={scores[0]}
        onClick={onClickAnswer}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      >
        {choices[0]}
      </button>
      <button
        id={scores[1]}
        onClick={onClickAnswer}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      >
        {choices[1]}
      </button>
    </div>
  );
}

export default Question;
