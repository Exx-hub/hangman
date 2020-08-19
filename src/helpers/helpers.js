export const checkWin = (correct, wrong, selected) => {
  let status = "win";

  //check for win
  selected.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }

    //check for lose
    if (wrong.length === 6) {
      status = "lose";
    }
  });
  return status;
};

export const setShowHelper = (setShowFunction) => {
  setShowFunction(true);
  setTimeout(() => setShowFunction(false), 1500);
};
