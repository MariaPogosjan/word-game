import React from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

import Guess from "../Guess/Guess";


function GuessResult({ guessList, answer }) {

  return (
    <div className="guess-results">
       {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
          const guess = guessList[index]
          const styles = checkGuess(guess, answer)
          return <Guess letter={guess} key={index} styles={styles} />
       })
      }
    </div>
  );
}

export default GuessResult;
