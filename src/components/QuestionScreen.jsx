import React, { useState } from "react";
import Header from "./Header";

function QuestionScreen({
  question,
  submitAnswer,
  message,
  score,
  level,
  questionIndex,
}) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitAnswer(answer);
    setAnswer("");
  };
  return (
    <div className="question-screen">
      <Header />
      <form>
        <h3 className="level">Level: {level} </h3>
        <h3>Q: {question.question} </h3>

        <div className="boolean-type">
          {question.type === "multiple-choice" &&
            question.options.map((option, index) => (
              <div key={index} className="single-answer-radio">
                <input
                  type="radio"
                  value={option}
                  checked={answer === option}
                  onChange={(e) => setAnswer(e.target.value)}
                />
                <label key={index}>{option}</label>
              </div>
            ))}
        </div>

        {question.type === "text-input" && (
          <div className="text-answer">
            <label htmlFor="name">Ans: </label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
        )}

        {question.type === "true-false" && (
          <div className="boolean-type">
            <div className="single-answer-radio">
              <input
                type="radio"
                value="true"
                checked={answer === "true"}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <label>True</label>
            </div>
            <div className="single-answer-radio">
              <input
                type="radio"
                value="false"
                checked={answer === "false"}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <label>False</label>
            </div>
          </div>
        )}

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      <div className="message">
        {!(level === "easy" && questionIndex == 0) && (
          <p>Last Response: {message}</p>
        )}
        <p>Score: {score}</p>
      </div>
    </div>
  );
}

export default QuestionScreen;
