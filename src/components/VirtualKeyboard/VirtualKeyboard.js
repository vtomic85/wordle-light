import "./VirtualKeyboard.css";

const VirtualKeyboard = ({ onKeyClicked }) => {
  return (
    <div className="keyboardContainer">
      <div className="keyboardRow">
        <button className="keyboardKey" onClick={() => onKeyClicked("Q")}>
          Q
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("W")}>
          W
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("E")}>
          E
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("R")}>
          R
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("T")}>
          T
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("Y")}>
          Y
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("U")}>
          U
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("I")}>
          I
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("O")}>
          O
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("P")}>
          P
        </button>
      </div>
      <div className="keyboardRow">
        <button className="keyboardKey" onClick={() => onKeyClicked("A")}>
          A
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("S")}>
          S
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("D")}>
          D
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("F")}>
          F
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("G")}>
          G
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("H")}>
          H
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("J")}>
          J
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("K")}>
          K
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("L")}>
          L
        </button>
      </div>
      <div className="keyboardRow">
        <button className="keyboardKey" onClick={() => onKeyClicked("Z")}>
          Z
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("X")}>
          X
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("C")}>
          C
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("V")}>
          V
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("B")}>
          B
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("N")}>
          N
        </button>
        <button className="keyboardKey" onClick={() => onKeyClicked("M")}>
          M
        </button>
        <button
          className="keyboardKey backspace"
          onClick={() => onKeyClicked("BACKSPACE")}
        >
          ◄
        </button>
      </div>
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
