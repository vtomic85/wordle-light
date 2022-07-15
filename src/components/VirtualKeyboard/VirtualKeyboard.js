import "./VirtualKeyboard.css";
import VirtualKeyboardRow from "./VirtualKeyboardRow";

const VirtualKeyboard = ({ onKeyClicked, usedLetters }) => {
  return (
    <div className="keyboardContainer">
      <VirtualKeyboardRow
        keys={["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]}
        usedLetters={usedLetters}
        onKeyClicked={onKeyClicked}
      />
      <VirtualKeyboardRow
        keys={["A", "S", "D", "F", "G", "H", "J", "K", "L"]}
        usedLetters={usedLetters}
        onKeyClicked={onKeyClicked}
      />
      <VirtualKeyboardRow
        keys={["Z", "X", "C", "V", "B", "N", "M", "BACK"]}
        usedLetters={usedLetters}
        onKeyClicked={onKeyClicked}
      />
      <div className="keyboardRow">
        <button
          className="keyboardKey submit"
          onClick={() => onKeyClicked("SUBMIT")}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default VirtualKeyboard;
