import s from "./Feedback.module.css";

const Feedback = ({ options, total, positive }) => {
  return (
    <section className={s.feedback}>
      <p className={s.char}>
        Good: <span className={s.good}>{options.good}</span>
      </p>
      <p className={s.char}>
        Neutral: <span className={s.neutral}>{options.neutral}</span>
      </p>
      <p className={s.char}>
        Bad: <span className={s.bad}>{options.bad}</span>
      </p>
      <p className={s.char}>
        Total: <span>{total}</span>
      </p>
      <p className={s.char}>
        Positive:{" "}
        <span className={positive > 70 ? s.good : s.bad}>{positive}%</span>
      </p>
    </section>
  );
};

export default Feedback;
