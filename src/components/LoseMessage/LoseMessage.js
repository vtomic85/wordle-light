import "./LoseMessage.css";

const LoseMessage = ({ secretWord }) => {
  return (
    <div className="loseMessageContainer">
      <p className="loseMessage">
        The secret word was: {secretWord.toUpperCase()}
      </p>
    </div>
  );
};

export default LoseMessage;
