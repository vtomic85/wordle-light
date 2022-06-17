import Board from "./components/Board/Board";
import "./App.css";
import { WORDS } from "./words";

function App() {
  const secretWord = WORDS[Math.floor(Math.random() * WORDS.length)];

  return (
    <div className="container">
      <h1>Wordle Light</h1>
      <Board secretWord={secretWord} />
    </div>
  );
}

export default App;
