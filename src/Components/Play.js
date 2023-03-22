import React from "react";
import { Link } from "react-router-dom";

const Play = ({ setMyChoice }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
    console.log(e.target.dataset.id);
  };

  return (
    <>
      <h2>Play</h2>
      <div className="play">
        {console.log("play")}

        <Link to="/game">
          <div data-id="paper" className="paper" onClick={setChoice}>
            <div data-id="paper" className="icon-paper"></div>
          </div>
        </Link>
        <Link to="/game">
          <div data-id="scissors" onClick={setChoice} className="scissors">
            <div data-id="scissors" className="icon-scissors"></div>
          </div>
        </Link>
        <Link to="/game">
          <div data-id="rock" onClick={setChoice} className="rock">
            <div data-id="rock" className="icon-rock"></div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Play;
