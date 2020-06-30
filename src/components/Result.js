import React from "react";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";

function Result() {
  return (
    <div className=" py-8 border-8 border-blue-400 w-11/12">
      <p className="text-xl">你是</p>
      <img
        src=""
        alt="ガチ恋イラスト"
        className="w-64
 m-auto"
      />
      <h1 className="text-3xl"> 普通的飯</h1>

      <p className="text-sm my-2">
        你的得分 <span className="text-2xl">5</span>
      </p>
      <p className="text-xs my-2">
        平均得分 <span className="text-2xl">5</span>
      </p>
      <p>分享到SNS</p>
      <div className="flex justify-center">
        <a
          href="https://twitter.com/intent/tweet?text=Hello%20world"
          target="_blank"
          className="w-6 mx-2"
        >
          <img src={twitter} alt="" />
        </a>
        <a
          href="https://twitter.com/intent/tweet?text=Hello%20world"
          target="_blank"
          className="w-6 mx-2"
        >
          <img src={facebook} alt="" />
        </a>
        <a
          href="https://twitter.com/intent/tweet?text=Hello%20world"
          target="_blank"
          className="w-6 mx-2"
        >
          <img src={whatsapp} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Result;
