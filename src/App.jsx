import "./App.css";
import FinalScreen from "./components/FinalScreen";
import QuestionScreen from "./components/QuestionScreen";

import StartScreen from "./components/StartScreen";

function App() {
  return (
    <div className="app">
      <StartScreen />
      <QuestionScreen />
      <FinalScreen />
    </div>
  );
}

export default App;
