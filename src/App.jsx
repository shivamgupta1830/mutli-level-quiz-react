import { useEffect, useState } from "react";
import "./App.css";
import FinalScreen from "./components/FinalScreen";
import QuestionScreen from "./components/QuestionScreen";
import StartScreen from "./components/StartScreen";

function App() {
  const [questionScreen, setQuestionScreen] = useState(false);
  const [level, setLevel] = useState("easy");
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    fetch(`/question.json`)
      .then((response) => response.json())
      .then((data) => setQuestions(data[level]))
      .catch((error) => console.log(error));
  }, [level]);

  const startQuiz = () => {
    setQuestionScreen(!questionScreen);
    setLevel("easy");
    setQuestionIndex(0);
    setScore(0);
    setMessage("");
    setGameOver(false);
  };

  const submitAnswer = (answer) => {
    const currentQuestion = questions[questionIndex];
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + (level === "easy" ? 10 : level === "medium" ? 20 : 30));
      setMessage("Correct Answer!");
    } else {
      setMessage("Incorrect answer!");
    }

    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      if (level === "easy" && score >= 20) {
        setLevel("medium");
        setQuestionIndex(0);
      } else if (level === "medium" && score >= 60) {
        setLevel("hard");
        setQuestionIndex(0);
      } else if (level === "hard" && score >= 120) {
        setMessage(
          <div>
            <span className="level">Congrats!</span> You have passed all the
            levels !!
          </div>
        );
        setGameOver(true);
      } else {
        // setMessage(`You have failed the ${level} level !!`);
        setMessage(
          <div>
            You have failed the <span className="level">{level}</span> level !!
          </div>
        );
        setGameOver(true);
      }
    }
  };

  if (gameOver) {
    return (
      <FinalScreen score={score} restartQuiz={startQuiz} message={message} />
    );
  }

  if (questions.length === 0) {
    return (
      <div className="loader">
        <h1>Questions loading...</h1>
      </div>
    );
  }

  return (
    <div className="app">
      {!questionScreen && <StartScreen startQuiz={startQuiz} />}
      {questionScreen && questions.length > 0 && (
        <QuestionScreen
          question={questions[questionIndex]}
          submitAnswer={submitAnswer}
          message={message}
          score={score}
          level={level}
          questionIndex={questionIndex}
        />
      )}
    </div>
  );
}

export default App;
