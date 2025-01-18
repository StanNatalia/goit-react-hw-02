import css from "./Options.module.css";

const Options = ({ updateFeedback, handleResetClick, totalFeedback }) => {
  return (
    <div className={css.btnWrapper}>
      <button onClick={() => updateFeedback("good")} className={css.btn}>
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} className={css.btn}>
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} className={css.btn}>
        Bad
      </button>
      {totalFeedback !== 0 && (
        <button onClick={handleResetClick} className={css.btn}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
