import s from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <section className={s.options}>
      <button
        className={s.btn}
        type="button"
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={s.btn}
        type="button"
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      <button
        className={totalFeedback === 0 ? s.isHidden : s.btn}
        type="button"
        onClick={resetFeedback}
      >
        Reset
      </button>
    </section>
  );
};

export default Options;
