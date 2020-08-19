import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import PopUp from "./components/PopUp";
import Notification from "./components/Notification";
import { setShowHelper } from "./helpers/helpers";
import gamewords from "./gamewords";

import "./App.css";

let selectedWord = gamewords[Math.floor(Math.random() * gamewords.length)];

function App() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [playable, setPlayable] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((prevCurrentLetters) => [
              ...prevCurrentLetters,
              letter,
            ]);
          } else {
            setShowHelper(setShow);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((prevWrongLetters) => [
              ...prevWrongLetters,
              letter,
            ]);
          } else {
            setShowHelper(setShow);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [correctLetters, wrongLetters, playable]);

  const playAgain = () => {
    setPlayable(true);

    setCorrectLetters([]);
    setWrongLetters([]);

    const randomNumber = Math.floor(Math.random() * gamewords.length);
    selectedWord = gamewords[randomNumber];
  };

  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <PopUp
        correctLetters={correctLetters}
        selectedWord={selectedWord}
        wrongLetters={wrongLetters}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />

      <Notification show={show} />
    </div>
  );
}

export default App;
