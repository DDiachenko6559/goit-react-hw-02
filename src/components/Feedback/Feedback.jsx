const Feedback = ({ options, total, positive }) => {
  return (
    <section>
      <p>Good: {options.good}</p>
      <p>Neutral: {options.neutral}</p>
      <p>Bad: {options.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}</p>
    </section>
  );
};

export default Feedback;
