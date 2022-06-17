import "./Letter.css";

const Letter = ({ letter, result }) => {
  return (
    <div
      className={`letter ${
        result === "O" ? "green" : result === "X" ? "yellow" : ""
      }`}
    >
      {letter}
    </div>
  );
};
export default Letter;
