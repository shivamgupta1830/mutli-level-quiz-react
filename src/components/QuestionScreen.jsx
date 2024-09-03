import React from "react";
import Header from "./Header";

function QuestionScreen() {
  return (
    <div className="question-screen">
      <Header />
      <form>
        <h3>
          Q: What is react framework in the context of Frontend Development?
          (Level: Easy)
        </h3>

        {/* radio */}

        {/* <div className="single-answer-radio">
          <div>
            <input type="radio" id="huey" name="drone" value="huey" />
            <label htmlFor="huey"> Huey</label>
          </div>

          <div>
            <input type="radio" id="dewey" name="drone" value="dewey" />
            <label htmlFor="dewey"> Dewey</label>
          </div>

          <div>
            <input type="radio" id="louie" name="drone" value="louie" />
            <label htmlFor="louie"> Louie</label>
          </div>
          <div>
            <input type="radio" id="louie" name="drone" value="louie" />
            <label htmlFor="louie"> Spouie</label>
          </div>
        </div> */}

        {/* Checkbox */}

        <div className="multiple-answer">
          <div>
            <input type="checkbox" id="scales" name="scales" />
            <label htmlFor="scales"> Scales</label>
          </div>

          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label htmlFor="horns"> Horns</label>
          </div>
          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label htmlFor="horns"> Horns</label>
          </div>
          <div>
            <input type="checkbox" id="horns" name="horns" />
            <label htmlFor="horns"> Horns</label>
          </div>
        </div>

        {/* Input */}

        {/* <div className="text-answer">
          <label htmlFor="name">Ans: </label>
          <input
            type="textarea"
            id="name"
            name="name"
            placeholder="Type your answer"
          />
        </div> */}

        {/* Boolean */}

        {/* <div className="boolean-answer">
          <div>
            <input type="radio" id="true" name="boolean" value="true" />
            <label htmlFor="huey"> True</label>
          </div>

          <div>
            <input type="radio" id="false" name="boolean" value="false" />
            <label htmlFor="dewey"> False</label>
          </div>
        </div> */}

        <div className="button-group">
          <button type="submit">Submit</button>
          <button>Next</button>
        </div>
      </form>
      <div className="message">
        <p>Correct answer...</p>
        <p>Score: 20</p>
      </div>
    </div>
  );
}

export default QuestionScreen;
