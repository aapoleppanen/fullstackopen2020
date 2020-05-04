import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));

  const handleNext = () => {
    let rand = Math.floor(Math.random() * anecdotes.length);
    while (rand === selected) {
      rand = Math.floor(Math.random() * anecdotes.length);
    }
    setSelected(rand);
  };

  const handleVote = () => {
    const tempArr = [...votes];
    tempArr[selected] += 1;
    setVotes(tempArr);
  };

  return (
    <div>
      <h1>Anecdote of the day:</h1>
      <div>{props.anecdotes[selected]}</div>
      <br />
      <div>This anecdote has {votes[selected]} votes!</div>
      <br />
      <Button handleClick={handleNext} text="Next"></Button>
      <Button handleClick={handleVote} text="Vote"></Button>
      <br />
      <h1>Most popular anecdote:</h1>
      <div>
        {
          props.anecdotes[
            votes.indexOf(
              votes.reduce((acc, curr) => (curr > acc ? (acc = curr) : acc))
            )
          ]
        }
        <br />
        <br />
        With {votes.reduce((acc, curr) =>
          curr > acc ? (acc = curr) : acc
        )}{" "}
        votes!
      </div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
