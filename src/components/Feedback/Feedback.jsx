import css from "./Feedback.module.css";
const Feedback = ({ feedbackData, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul className={css.wrapper}>
        <li className={css.item}>Good: {feedbackData.good}</li>
        <li className={css.item}>Neutral: {feedbackData.neutral}</li>
        <li className={css.item}>Bad: {feedbackData.bad}</li>
        <li className={css.item}>Total: {totalFeedback}</li>
        <li className={css.item}>Positive: {positiveFeedback}</li>
      </ul>
    </div>
  );
};

export default Feedback;
