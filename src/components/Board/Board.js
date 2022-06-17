import { useEffect, useState } from "react";
import Row from "../Row/Row";
import WinMessage from "../WinMessage/WinMessage";
import "./Board.css";

const Board = ({ secretWord }) => {
  const [currentAttempt, setCurrentAttempt] = useState([]);
  const [storedAttempts, setStoredAttempts] = useState([]);
  const [results, setResults] = useState([]);
  const [win, setWin] = useState(false);

  const secret = "AUDIO";

  const checkResult = () => {
    let secretChecked = [false, false, false, false, false];
    let attemptChecked = [false, false, false, false, false];
    let result = [];
    let correct = 0;
    // Detect correct guesses
    for (let i = 0; i < 5; i++) {
      if (secret.charAt(i) === currentAttempt[i]) {
        secretChecked[i] = true;
        attemptChecked[i] = true;
        result[i] = "O";
        correct++;
      } else {
        for (let j = 0; j < 5; j++) {
          if (secret.charAt(i) === currentAttempt[j]) {
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
  };

  const onLetterTyped = (e) => {
    // If the player didn't win yet
    if (!win) {
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
        setCurrentAttempt([]);
        checkResult();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", onLetterTyped);
    return () => {
      window.removeEventListener("keyup", onLetterTyped);
    };
  }, [currentAttempt]);

  return (
    <div className="board">
      {secret}
      <div className="currentAttempt">{currentAttempt}</div>
      <div className="storedAttempts">
        <Row attempt={storedAttempts[0]} result={results[0]} />
        <Row attempt={storedAttempts[1]} result={results[1]} />
        <Row attempt={storedAttempts[2]} result={results[2]} />
        <Row attempt={storedAttempts[3]} result={results[3]} />
        <Row attempt={storedAttempts[4]} result={results[4]} />
        <Row attempt={storedAttempts[5]} result={results[5]} />
      </div>
      <div className="results"></div>
      {win && <WinMessage />}
    </div>
  );
};
export default Board;
