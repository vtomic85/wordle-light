import { useEffect, useState } from "react";
import LoseMessage from "../LoseMessage/LoseMessage";
import ResetButton from "../ResetButton/ResetButton";
import Row from "../Row/Row";
import WinMessage from "../WinMessage/WinMessage";
import "./Board.css";

const Board = ({ secretWord }) => {
  const [currentAttempt, setCurrentAttempt] = useState([]);
  const [storedAttempts, setStoredAttempts] = useState([]);
  const [results, setResults] = useState([]);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);

  const checkResult = () => {
    let secretChecked = [false, false, false, false, false];
    let attemptChecked = [false, false, false, false, false];
    let result = [];
    let correct = 0;
    // Detect correct guesses
    for (let i = 0; i < 5; i++) {
      if (
        secretWord.charAt(i).toLowerCase() === currentAttempt[i].toLowerCase()
      ) {
        secretChecked[i] = true;
        attemptChecked[i] = true;
        result[i] = "O";
        correct++;
      } else {
        for (let j = 0; j < 5; j++) {
          if (
            secretWord.charAt(i).toLowerCase() ===
            currentAttempt[j].toLowerCase()
          ) {
            secretChecked[i] = true;
            attemptChecked[j] = true;
            result[j] = "X";
          }
        }
      }
    }
    setResults((prevState) => [...prevState, result]);
    if (correct === 5) {
      setWin(true);
    }
    if (correct < 5 && storedAttempts.length === 5) {
      setLose(true);
    }
  };

  const onLetterTyped = (e) => {
    // If the player didn't win nor lose yet
    if (!win && !lose && storedAttempts.length < 6) {
      // Accept only letters
      if (currentAttempt.length < 5 && e.keyCode >= 65 && e.keyCode <= 90) {
        setCurrentAttempt((prevState) => [...prevState, e.key.toUpperCase()]);
      }
      // Backspace
      if (currentAttempt.length > 0 && e.keyCode === 8) {
        setCurrentAttempt((prevState) =>
          prevState.slice(0, currentAttempt.length - 1)
        );
      }
      // Enter
      if (currentAttempt.length === 5 && e.keyCode === 13) {
        setStoredAttempts((prevState) => [
          ...prevState,
          currentAttempt.join(""),
        ]);
        checkResult();
        setCurrentAttempt([]);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", onLetterTyped);
    return () => {
      window.removeEventListener("keyup", onLetterTyped);
    };
  }, [currentAttempt]);

  const onNewGame = () => {
    setCurrentAttempt([]);
    setStoredAttempts([]);
    setResults([]);
    setWin(false);
    setLose(false);
  };

  return (
    <>
      <div className="board">
        <div className="currentAttempt">{currentAttempt}</div>
        <div className="storedAttempts">
          <Row attempt={storedAttempts[0]} result={results[0]} />
          <Row attempt={storedAttempts[1]} result={results[1]} />
          <Row attempt={storedAttempts[2]} result={results[2]} />
          <Row attempt={storedAttempts[3]} result={results[3]} />
          <Row attempt={storedAttempts[4]} result={results[4]} />
          <Row attempt={storedAttempts[5]} result={results[5]} />
        </div>
      </div>
      <div>
        <div className="results"></div>
        {win && <WinMessage />}
        {lose && <LoseMessage secretWord={secretWord} />}
        {(win || lose) && <ResetButton onNewGame={onNewGame} />}
      </div>
    </>
  );
};
export default Board;
