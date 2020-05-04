import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.count}
    </p>
  );
};

const Content = (props) => {
  const partsdivs = props.parts.map((element, index) => (
    <Part part={element.name} count={element.exercises} key={index}></Part>
  ));
  return <>{partsdivs}</>;
};

const Total = (props) => {
  const exercisearr = props.parts.map((element, index) => element.exercises);
  const totalsum = exercisearr.reduce((acc, cur) => acc + cur);
  return (
    <>
      <p>Number of exercises {totalsum}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
