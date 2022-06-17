import "./ResetButton.css";

const ResetButton = ({ onNewGame }) => {
  return (
    <div className="resetButtonHolder">
      <button className="resetButton" onClick={onNewGame}>
        New game
      </button>
    </div>
  );
};

export default ResetButton;
