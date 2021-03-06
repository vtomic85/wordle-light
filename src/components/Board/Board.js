import { useEffect, useState } from "react";
import { WORDS } from "../../words";
import LoseMessage from "../LoseMessage/LoseMessage";
import ResetButton from "../ResetButton/ResetButton";
import Row from "../Row/Row";
import VirtualKeyboard from "../VirtualKeyboard/VirtualKeyboard";
import WinMessage from "../WinMessage/WinMessage";
import "./Board.css";

const Board = () => {
  const [secretWord, setSecretWord] = useState(
    WORDS[Math.floor(Math.random() * WORDS.length)]
  );
  const [currentAttempt, setCurrentAttempt] = useState([]);
  const [storedAttempts, setStoredAttempts] = useState([]);
  const [results, setResults] = useState([]);
  const [usedLetters, setUsedLetters] = useState([]);
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
            secretChecked[i] === false &&
            attemptChecked[j] === false &&
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
        doBackspaceAction();
      }
      // Enter
      if (currentAttempt.length === 5 && e.keyCode === 13) {
        doEnterAction();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", onLetterTyped);
    return () => {
      window.removeEventListener("keyup", onLetterTyped);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAttempt]);

  const onNewGame = () => {
    setSecretWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
    setCurrentAttempt([]);
    setStoredAttempts([]);
    setUsedLetters([]);
    setResults([]);
    setWin(false);
    setLose(false);
  };

  const onKeyClicked = (key) => {
    switch (key) {
      case "SUBMIT":
        doEnterAction();
        break;
      case "BACKSPACE":
        doBackspaceAction();
        break;
      default:
        if (
          !win &&
          !lose &&
          storedAttempts.length < 6 &&
          currentAttempt.length < 5
        ) {
          setCurrentAttempt((prevState) => [...prevState, key.toUpperCase()]);
        }
        break;
    }
  };

  const doEnterAction = () => {
    if (!win && !lose && storedAttempts.length < 6) {
      if (currentAttempt.length === 5) {
        addCurrentAttemptToStored();
        updateUsedLetters();
        checkResult();
        setCurrentAttempt([]);
      }
    }
  };

  const doBackspaceAction = () => {
    if (
      !win &&
      !lose &&
      storedAttempts.length < 6 &&
      currentAttempt.length > 0
    ) {
      setCurrentAttempt((prevState) =>
        prevState.slice(0, currentAttempt.length - 1)
      );
    }
  };

  const addCurrentAttemptToStored = () => {
    setStoredAttempts((prevState) => [...prevState, currentAttempt.join("")]);
  };

  const updateUsedLetters = () => {
    for (let i = 0; i < 5; i++) {
      if (!usedLetters.includes(currentAttempt[i])) {
        setUsedLetters((prevState) => [...prevState, currentAttempt[i]]);
      }
    }
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
      <VirtualKeyboard onKeyClicked={onKeyClicked} usedLetters={usedLetters} />
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
