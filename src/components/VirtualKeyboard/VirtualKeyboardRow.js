import "./VirtualKeyboard.css";
const VirtualKeyboardRow = ({ keys, usedLetters, onKeyClicked }) => {
  return (
    <div className="keyboardRow">
      {keys.map((key, i) =>
        key === "BACK" ? (
          <button
            className="keyboardKey backspace"
            onClick={() => onKeyClicked("BACKSPACE")}
          >
            ◄
          </button>
        ) : key === "SUBMIT" ? (
          <button
            className="keyboardKey submit"
            onClick={() => onKeyClicked("SUBMIT")}
          >
            SUBMIT
          </button>
        ) : (
                      <button className={`keyboardKey ${usedLetters.includes(key) ? "used" : ""}`} onClick={() => onKeyClicked(key)}>
            {key}
          </button>
        )
      )}
    </div>
  );
};

export default VirtualKeyboardRow;
