import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import { useState, useEffect } from "react";

const INITIAL_FEEDBACK_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (savedFeedback) {
      return savedFeedback;
    }

    return INITIAL_FEEDBACK_STATE;
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback(INITIAL_FEEDBACK_STATE);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <main>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          options={feedback}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </main>
  );
};

export default App;
