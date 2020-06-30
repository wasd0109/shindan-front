import React from "react";
import start from "../assets/start.png";

function Start({ startTitle, onClickStart }) {
  return (
    <div className=" py-8 border-8 border-blue-400 w-10/12">
      <img
        src={start}
        alt="ガチ恋イラスト"
        className="w-64
     m-auto"
      />
      <h1 className="text-xl md:text-2xl">{startTitle}</h1>
      <button
        onClick={onClickStart}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      >
        開始
      </button>
      <footer className="mt-2">
        Created by
        <span>
          <a
            href="https://www.facebook.com/wotasaidwhat9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg ml-1"
          >
            ヲタ噏乜9
          </a>
        </span>
      </footer>
    </div>
  );
}

export default Start;
