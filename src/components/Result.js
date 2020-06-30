import React from "react";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import images from "../assets/result/index";

const decideRank = (total) => {
  if (total < 4) {
    return ["普通的飯", images[0]];
  }
  if (total < 7) {
    return ["ガチ恋初期", images[1]];
  }
  if (total < 11) {
    return ["ガチ恋準備軍", images[2]];
  }
  if (total < 14) {
    return ["ガチ恋", images[3]];
  }

  return ["急需入院", images[4]];
};

const sendScore = (score) => {
  const data = JSON.stringify({ score: score, date: new Date() });
  fetch("https://shindan-back.herokuapp.com/scores", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
};

function Result({ scores, siteLink, average }) {
  const total = scores.reduce((acc, val) => acc + val);
  const [rank, image] = decideRank(total);
  sendScore(total);
  return (
    <div className=" py-8 border-8 border-blue-400 w-10/12 ">
      <p className="text-xl">你ガチ恋程度是</p>
      <img
        src={image}
        alt="ガチ恋イラスト"
        className="h-64
 m-auto"
      />
      <h1 className="text-3xl font-bold">{rank}</h1>

      <p className="text-sm my-2">
        你的得分是 <span className="text-2xl">{total}</span>
      </p>
      <p className="text-xs my-2">
        平均得分 <span className="text-2xl">{average.toFixed(0)}</span>
      </p>
      <p>分享到SNS</p>
      <div className="flex justify-center">
        <a
          href={`https://twitter.com/intent/tweet?text=我的等級是${rank}! 在這裡接受測試吧! ${siteLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 mx-2"
        >
          <img src={twitter} alt="" />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?p[title]=YOUR_TITLE&p[summary]=YOUR_SUMMARY&u=${siteLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 mx-2"
        >
          <img src={facebook} alt="" />
        </a>
        <a
          href={`whatsapp://send?text=我的等級是${rank}! 在這裡接受測試吧! ${siteLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 mx-2"
        >
          <img src={whatsapp} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Result;
