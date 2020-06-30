import React from "react";
import start from "../assets/start.png";

function Start({ startTitle }) {
  return (
    <div className="my-24 flex justify-center text-center m-auto text-blue-100 ">
      <div className=" py-8 border-8 border-blue-600 w-11/12">
        <img
          src={start}
          alt="ガチ恋イラスト"
          className="w-64
     m-auto"
        />
        <h1 className="text-2xl">{startTitle}</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
          開始
        </button>
        <p className="text-sm my-2">以電話瀏覽以獲得最佳體驗</p>
        <p className="text-xs my-2">你的得分將上載於伺服器作計算平均分數之用</p>
      </div>
    </div>
  );
}

export default Start;
