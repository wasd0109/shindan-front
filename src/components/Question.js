import React from "react";

function Question({ question, onClickAnswer }) {
  const { questionTitle, choice, score } = question;

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
        id={score[0]}
        onClick={onClickAnswer}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      >
        {choice[0]}
      </button>
      <button
        id={score[1]}
        onClick={onClickAnswer}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      >
        {choice[1]}
      </button>
    </div>
  );
}

export default Question;
