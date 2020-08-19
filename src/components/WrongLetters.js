import React from "react";

function WrongLetters({ wrongLetters }) {
  return (
    <div className="wrong-letters-container">
      {wrongLetters.length > 0 && <p>Wrong Guesses:</p>}
      <div>
        {wrongLetters.map((letter, index) => (
          <span className="wrong-letters" key={index}>
            {letter}
            {","}
          </span>
        ))}
      </div>
    </div>
  );
}

export default WrongLetters;
