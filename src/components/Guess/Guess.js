import React from "react";
import { range } from "../../utils";

function Guess({ letter, styles }) {

  return (
    <p className="guess">
      {range(5).map((index) => {
        const className = styles ? `cell ${styles[index].status}` : "cell";
        return <span key={index} className={className}>
          {letter ? letter[index] : undefined}
          </span>
      })}
     
    </p>
);
}

export default Guess;
