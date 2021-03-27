import React, { useState } from "react";

import styled from "styled-components";
import Result from "./Result";

export default function ChoicesList(props) {
  const [selectedOption, setSelectedOption] = useState(props.choices[0]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
    console.log(e.target.value);

    if (e.target.value === props.answer) {
      setScore(score + 1);
    }
  };

  function finish() {
    setShowResult(true);
  }

  return (
    <ChoicesListContainer>
      <Choice>
        <Input
          type="radio"
          value={props.choices[0]}
          checked={selectedOption === props.choices[0]}
          onChange={(e) => handleRadioChange(e)}
        />
        <label>{props.choices[0]}</label>
      </Choice>
      <Choice>
        <Input
          type="radio"
          value={props.choices[1]}
          checked={selectedOption === props.choices[1]}
          onChange={(e) => handleRadioChange(e)}
        />
        <label>{props.choices[1]}</label>
      </Choice>
      <Choice>
        <Input
          type="radio"
          value={props.choices[2]}
          checked={selectedOption === props.choices[2]}
          onChange={(e) => handleRadioChange(e)}
        />
        <label>{props.choices[2]}</label>
      </Choice>
      <Choice>
        <Input
          type="radio"
          value={props.choices[3]}
          checked={selectedOption === props.choices[3]}
          onChange={(e) => handleRadioChange(e)}
        />
        <label>{props.choices[3]}</label>
      </Choice>
      <div>
        {props.leftCounter >= "9" && props.rightCounter >= "10" ? (
          <button onClick={finish}>Check</button>
        ) : (
          ""
        )}
      </div>
      <div>{showResult ? <Result score={score} /> : ""}</div>
    </ChoicesListContainer>
  );
}

const ChoicesListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background-color: "blue";
  cursor: pointer;
`;

const Choice = styled.div`
  background-color: #b9eee0;
  color: black;
  padding: 0.5em;
  border-bottom: 2px solid white;
  width: 250px;
  border-radius: 5px;
`;
