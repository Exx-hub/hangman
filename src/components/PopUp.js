import React, { useEffect } from "react";
import { checkWin } from "../helpers/helpers";

function PopUp({
  correctLetters,
  setPlayable,
  selectedWord,
  wrongLetters,
  playAgain,
}) {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    console.log("win");
    finalMessage = "Congrats you win";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    console.log("lose");
    finalMessage = "sorry try again";
    finalMessageRevealWord = `The word was:  ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  }, [correctLetters, wrongLetters, selectedWord, setPlayable, playable]);

  return (
    <div className={playable ? "popup-container-hidden" : "popup-container"}>
      <div className="popup">
        <h2 className="final-message">{finalMessage}</h2>
        <h3 className="final-message-reveal-word">{finalMessageRevealWord}</h3>
        <button className="play-button" onClick={playAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default PopUp;
