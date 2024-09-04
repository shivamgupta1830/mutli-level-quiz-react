import "../../src/App.css";

function StartScreen({ startQuiz }) {
  return (
    <div className="start-screen">
      <h1>Welcome to Multi-level quiz</h1>
      <h2>Click to start</h2>
      <button onClick={startQuiz}>START</button>
    </div>
  );
}

export default StartScreen;
