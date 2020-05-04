import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const average = (good + -1 * bad) / (good + bad + neutral);
  const positive = (good / (good + bad + neutral)) * 100 + " %";
  if (good + neutral + bad === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given yet!</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <Statistic text="Good" value={good}></Statistic>
            <Statistic text="Neutral" value={neutral}></Statistic>
            <Statistic text="Bad" value={bad}></Statistic>
            <Statistic text="Average" value={average}></Statistic>
            <Statistic text="Positive" value={positive}></Statistic>
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedBack = (fdbFun, fdbVar) => {
    fdbFun(fdbVar + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button
        handleClick={() => handleFeedBack(setGood, good)}
        text="Good"
      ></Button>
      <Button
        handleClick={() => handleFeedBack(setNeutral, neutral)}
        text="Neutral"
      ></Button>
      <Button
        handleClick={() => handleFeedBack(setBad, bad)}
        text="Bad"
      ></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
