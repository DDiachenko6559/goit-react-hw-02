const Feedback = ({ options }) => {
  return (
    <section>
      <p>Good: {options.good}</p>
      <p>Neutral: {options.neutral}</p>
      <p>Bad: {options.bad}</p>
    </section>
  );
};

export default Feedback;
