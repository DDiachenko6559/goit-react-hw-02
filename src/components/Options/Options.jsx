import s from "./Options.module.css";

const Options = ({ updateFeedback }) => {
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
      </div>
    </section>
  );
};

export default Options;
