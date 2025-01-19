import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Feedback from "./components/Feedback/Feedback";
import { useEffect, useState } from "react";

function App() {
  const [feedbackData, setFeedbackData] = useState(
    () =>
      JSON.parse(localStorage.getItem("feedbacks")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  useEffect(() => {
    console.log("Saving feedbacks to localStorage:", feedbackData);
    localStorage.setItem("feedbacks", JSON.stringify(feedbackData));
  }, [feedbackData]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good") {
      setFeedbackData((prev) => ({ ...prev, good: prev.good + 1 }));
    }
    if (feedbackType === "bad") {
      setFeedbackData((prev) => ({ ...prev, bad: prev.bad + 1 }));
    }
    if (feedbackType === "neutral") {
      setFeedbackData((prev) => ({ ...prev, neutral: prev.neutral + 1 }));
    }
  };

  const handleResetClick = () => {
    setFeedbackData({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback =
    feedbackData.good + feedbackData.neutral + feedbackData.bad;

  const positiveFeedback =
    Math.round((feedbackData.good / totalFeedback) * 100) || 0;

  return (
    <div>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        handleResetClick={handleResetClick}
      />

      {totalFeedback > 0 ? (
        <Feedback
          totalFeedback={totalFeedback}
          feedbackData={feedbackData}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
