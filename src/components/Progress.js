const Progress = ({
  index,
  questionsLength,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <header className='progress'>
      <progress
        max={questionsLength}
        value={index + +(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong> / {questionsLength}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
