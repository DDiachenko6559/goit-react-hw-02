import s from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <section>
      <div>
        <button type="button" onClick={() => updateFeedback("good")}>
          Good
        </button>
        <button type="button" onClick={() => updateFeedback("neutral")}>
          Neutral
        </button>
        <button type="button" onClick={() => updateFeedback("bad")}>
          Bad
        </button>
        <button
          className={totalFeedback === 0 ? s.isHidden : ""}
          type="button"
          onClick={resetFeedback}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default Options;
