import React from "react";

function FinalScreen({ score, restartQuiz, message }) {
  return (
    <div className="final-screen">
      <h1>Quiz Completed !!</h1>
      <h2>{message}</h2>
      <h2>Final Score: {score}</h2>
      <h2>Click to restart the quiz</h2>
      <button onClick={restartQuiz}>RESTART</button>
    </div>
  );
}

export default FinalScreen;
