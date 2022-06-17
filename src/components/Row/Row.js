import Letter from "../Letter/Letter";

const Row = ({ attempt, result }) => {
  return attempt ? (
    <div>
      {Array.from(Array(5).keys()).map((_, i) => (
        <Letter key={i} letter={attempt.charAt(i)} result={result[i]} />
      ))}
    </div>
  ) : (
    <div>
      {Array.from(Array(5).keys()).map((_, i) => (
        <Letter key={i} letter="" />
      ))}
    </div>
  );
};
export default Row;
